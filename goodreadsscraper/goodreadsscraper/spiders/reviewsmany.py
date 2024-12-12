import scrapy
import json
import re
import copy
from scrapy.loader import ItemLoader
from goodreadsscraper.items import ReivewItem
from urllib.parse import urljoin

payload = {
    "operationName": "getReviews",
    "variables": {
        "filters": {
            "resourceType": "WORK",
            "resourceId": "kca://work/amzn1.gr.work.v1.wL0Eva4wZSadIbmTplvGHg"
        },
        "pagination": {
            "after": "MTkzOCwxNDI5NDQ2MDE5MDAw",  # No initial "after" token
            "limit": 30
        }
    },
    "query": """
        query getReviews($filters: BookReviewsFilterInput!, $pagination: PaginationInput) {
          getReviews(filters: $filters, pagination: $pagination) {
            ...BookReviewsFragment
            __typename
          }
        }
        
        fragment BookReviewsFragment on BookReviewsConnection {
          totalCount
          edges {
            node {
              ...ReviewCardFragment
              __typename
            }
            __typename
          }
          pageInfo {
            prevPageToken
            nextPageToken
            __typename
          }
          __typename
        }
        
        fragment ReviewCardFragment on Review {
          __typename
          id
          creator {
            ...ReviewerProfileFragment
            __typename
          }
          recommendFor
          updatedAt
          createdAt
          spoilerStatus
          lastRevisionAt
          text
          rating
          shelving {
            shelf {
              name
              webUrl
              __typename
            }
            taggings {
              tag {
                name
                webUrl
                __typename
              }
              __typename
            }
            webUrl
            __typename
          }
          likeCount
          viewerHasLiked
          commentCount
        }
        
        fragment ReviewerProfileFragment on User {
          id: legacyId
          imageUrlSquare
          isAuthor
          ...SocialUserFragment
          textReviewsCount
          viewerRelationshipStatus {
            isBlockedByViewer
            __typename
          }
          name
          webUrl
          contributor {
            id
            works {
              totalCount
              __typename
            }
            __typename
          }
          __typename
        }
        
        fragment SocialUserFragment on User {
          viewerRelationshipStatus {
            isFollowing
            isFriend
            __typename
          }
          followersCount
          __typename
        }
    """
}


class ReivewSpider(scrapy.Spider):
    name = 'review_spider_many'

    custom_settings = {
        'ROBOTSTXT_OBEY': False,  # Disable robots.txt
        'DOWNLOAD_DELAY': 1,      # Add delay to reduce server load
        'USER_AGENT': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36'
    }

    # start_urls = ['https://www.goodreads.com/book/show/1']
    def __init__(self, start_id=50000, end_id=51000, *args, **kwargs):
        super().__init__(*args, **kwargs)

        self.start_id = int(start_id)
        self.end_id = int(end_id)

        if self.start_id > self.end_id:
            raise ValueError("start_id must be less than or equal to end_id")

    # Define the range of book IDs to crawl
    def start_requests(self):
        base_url = 'https://www.goodreads.com/book/show/'

        for book_id in range(self.start_id, self.end_id + 1):
            url = f'{base_url}{book_id}'
            yield scrapy.Request(url=url, callback=self.parse)
        

    def parse(self, response):
        loader = ItemLoader(item=ReivewItem(), response=response)
        # Extract JSON text from the <script> tag
        script_data = response.css('script#__NEXT_DATA__::text').get()

        if script_data:
            data = json.loads(script_data)
            book_data = data.get('props', {}).get('pageProps', {}).get('apolloState', {})
            book_key = next(
                (key for key in book_data.keys() if key.startswith('Book:')),
                None
            )
            book_work = next(
                (key for key in book_data.keys() if key.startswith('Work:')),
                None
            )
            if book_key:
                book_info = book_data[book_key]
                book_stats = book_data[book_work]
            else:
                print("Book not available:", book_key)
                return None

            isbn = book_info.get('details', {}).get('isbn')
            isbn13 = book_info.get('details', {}).get('isbn13')

            preload_link = response.xpath('//link[@rel="preload" and contains(@href, "/_next/static/chunks/pages/")]/@href').get()
            reviews_data = book_data.get('ROOT_QUERY', {}).get('getReviews', {})
            tokens = reviews_data.get('pageInfo', {}).get('nextPageToken')

            all_reviews = []
            # Extract reviews from the JSON
            reviews = [
                book_data[key]
                for key in book_data.keys()
                if key.startswith('Review:')
            ]
            
            # loader = ItemLoader(item=ReivewItem(), response=response)
            loader.add_value('isbn', isbn)
            loader.add_value('isbn13', isbn13)
            
            for review_data in reviews:
                # Extract user data for the review
                user_ref = review_data.get('creator', {}).get('__ref', '')
                user_data = book_data.get(user_ref, {})

                loader.add_value('rating', {
                    'user': user_data.get('id'),
                    'rating': review_data.get('rating')
                })
            if book_info.get('details', {}).get('isbn') is None:
                url_shelves = book_stats.get('editions', {}).get('webUrl')
                if url_shelves:
                    yield scrapy.Request(
                            url=url_shelves,
                            callback=self.parse_shelves,
                            meta={'loader': loader}  # Pass the loader to the next method
                    )
            else:
                item = loader.load_item()
                yield item
        

    def parse_shelves(self, response):
        loader = response.meta['loader']

        isbn13 = response.xpath('//div[div[contains(text(), "ISBN:")]]/div[@class="dataValue"]/text()').get(default='').strip()
        isbn10 = response.xpath('//div[@class="dataRow"]//div[@class="dataValue"]/span[@class="greyText"]/text()').re_first(r'ISBN10:\s*(\d+)')

        # Add extracted values to the loader
        if isbn13:
            loader.add_value('isbn13', isbn13)
        if isbn10:
            loader.add_value('isbn', isbn10)

        item = loader.load_item()

        # Ensure ISBN and ISBN13 are at the top
        ordered_item = {
            'isbn': item.get('isbn'),
            'isbn13': item.get('isbn13'),
            **item
        }

        yield ordered_item
         