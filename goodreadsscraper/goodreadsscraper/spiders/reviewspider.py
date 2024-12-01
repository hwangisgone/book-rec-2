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
    name = 'review_spider'

    custom_settings = {
        'ROBOTSTXT_OBEY': False,  # Disable robots.txt
        'DOWNLOAD_DELAY': 1,      # Add delay to reduce server load
        'USER_AGENT': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36'
    }

    start_urls = ['https://www.goodreads.com/book/show/1']

    def parse(self, response):
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
            
            loader = ItemLoader(item=ReivewItem(), response=response)
            loader.add_value('isbn', isbn)
            loader.add_value('isbn13', isbn13)

            if book_info.get('details', {}).get('isbn') is None:
                url_shelves = book_stats.get('editions', {}).get('webUrl')
                if url_shelves:
                    yield scrapy.Request(
                            url=url_shelves,
                            callback=self.parse_shelves,
                            meta={'loader': loader}  # Pass the loader to the next method
                    )
                    
            # loader.add_value('tokens' , tokens)
            # loader.add_value('linkjs', full_link)
            
            for review_data in reviews:
                # Extract user data for the review
                user_ref = review_data.get('creator', {}).get('__ref', '')
                user_data = book_data.get(user_ref, {})

                # all_reviews.extend({
                #     'user': user_data.get('id'),
                #     'rating': review_data.get('rating')
                # })   
                loader.add_value('rating', {
                    'user': user_data.get('id'),
                    'rating': review_data.get('rating')
                })
            
            if preload_link:
                full_link = urljoin(response.url, preload_link)
                yield scrapy.Request(
                    url=full_link,
                    callback=self.parse_js,
                    meta={'loader': loader, 'tokens': tokens, "allReviews": all_reviews}  # Pass the loader to the next method
                )
            # else:
            #     yield loader.load_item()

    def parse_shelves(self, response):
        loader = response.meta['loader']

        isbn13 = response.xpath('//div[div[contains(text(), "ISBN:")]]/div[@class="dataValue"]/text()').get(default='').strip()
        isbn10 = response.xpath('//div[@class="dataRow"]//div[@class="dataValue"]/span[@class="greyText"]/text()').re_first(r'ISBN10:\s*(\d+)')
        # self.logger.info(f"Extracted ISBN13: {isbn13}, ISBN10: {isbn10}")

        # Add extracted values to the loader
        if isbn13:
            loader.add_value('isbn13', isbn13)
        if isbn10:
            loader.add_value('isbn', isbn10)

        # item = loader.load_item()
        # ordered_item = {
        #     'isbn': item.get('isbn'),
        #     'isbn13': item.get('isbn13'),
        #     **item
        # }

        # yield ordered_item
    
    def parse_js(self, response):
        loader = response.meta['loader']
        tokens = response.meta.get('tokens', None) 
        allreviews = response.meta.get('allReviews', [])
        # Extract the text content of the JavaScript file
        js_content = response.text
        
        # Regular expression to match JSON inside JSON.parse
        pattern = r'JSON\.parse\(\s*\'(.*?)\'\s*\)'

        # Extract the JSON string
        matches = re.findall(pattern, js_content, re.DOTALL)

        json_string = matches[1]
        data = json.loads(json_string)

        # Extract the 'graphql' object from 'Production'
        production_graphql = data["Production"]["graphql"]
        api_key = production_graphql["apiKey"]
        endpoint = production_graphql["endpoint"]

        headers = {
            "Content-Type": "application/json",
            "x-api-key": api_key
        }

        yield scrapy.Request(
            url=endpoint,
            callback=self.parse_graphql,
            method="POST",
            headers=headers,
            body=json.dumps(payload),  # Add the initial GraphQL payload
            meta={'loader': loader, 'nextPageToken': tokens, 'allReviews': allreviews}  # Store the nextPageToken as None for the first request
        )

        # loader.add_value('linkjs' , production_graphql)
        # Start the first GraphQL request
    
    def parse_graphql(self, response):
        loader = response.meta['loader']
        all_reviews = response.meta.get('allReviews', [])

        # Parse the JSON response
        data = response.json()
        reviews = data.get("data", {}).get("getReviews", {}).get("edges", [])

        all_reviews.extend([review["node"] for review in reviews])

        # deep_copy_reviews = copy.deepcopy(all_reviews)

        # Get the nextPageToken for pagination
        next_page_token = data.get("data", {}).get("getReviews", {}).get("pageInfo", {}).get("nextPageToken")
        
        extracted_data = [{"id": review["creator"]["id"], "rating": review["rating"]} for review in all_reviews]
        # self.log.info(extracted_data)
        self.logger.info(f"Extracted {(extracted_data)} ")


        # self.logger.info(f"Extracted {(all_reviews)} ")
        # If there is no nextPageToken, stop the loop
        if not next_page_token:
            # Process or save the reviews when no more pages
            extracted_data = [{"user": review["creator"]["id"], "rating": review["rating"]} for review in all_reviews]
            # self.log.info(extracted_data)
            # self.logger.info(f"Extracted {(extracted_data)} ")

            loader.add_value('rating', extracted_data)

            yield loader.load_item()
            return

        # Set the next "after" token for the next request
        payload["variables"]["pagination"]["after"] = next_page_token

        # Make the next request with the updated "after" token
        yield scrapy.Request(
            url=response.url,
            callback=self.parse_graphql,
            method="POST",
            headers=response.request.headers,
            body=json.dumps(payload),
            meta={'loader': loader, 'nextPageToken': next_page_token, 'allReviews': all_reviews }
        )