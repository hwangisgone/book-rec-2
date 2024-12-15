import scrapy
from bs4 import BeautifulSoup
import re
import json
import pickle
from scrapy.loader import ItemLoader
from goodreadsscraper.items import UserItem

class UserSpider(scrapy.Spider):
    name = "user_spider"
    allowed_domains = ["goodreads.com"]
    # start_urls = ["https://www.goodreads.com/user/show/49286709"]
    def __init__(self, inputfile="", *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.inputfile = inputfile
    
        if not self.inputfile:
            raise Exception("Input file not provided.")

    custom_settings = {
        'ROBOTSTXT_OBEY': False,  # Disable robots.txt
        'DOWNLOAD_DELAY': 1,      # Add delay to reduce server load
        'USER_AGENT': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36'
    }

    def start_requests(self): 
        with open(self.inputfile) as f: 
            data = json.load(f)
            for entry in data: 
                profile_url = entry.get('profileUrl', [None])[0] 
                if profile_url: 
                    yield scrapy.Request(url=profile_url, callback=self.parse)

    def parse(self, response):
        # Parse the page using BeautifulSoup for more flexible parsing
        soup = BeautifulSoup(response.body, 'html.parser')
        loader = ItemLoader(item=UserItem(), response=response)
    

        if response.css('#privateProfile'):
            # Extract ratings, reviews, and avg rating from the table if available
            ratings_count = response.css('td .smallText::text').re_first(r"(\d+)\s+ratings")
            reviews_count = response.css('td .smallText::text').re_first(r"(\d+)\s+reviews")
            avg_rating = response.css('td .smallText a::text').re_first(r"avg rating: (\d+\.\d+)")

            # Extract canonical link to get user ID and name
            canonical_link = response.css('link[rel="canonical"]::attr(href)').get()

            match = re.search(r"/user/show/(\d+)-(\w+)", canonical_link)

            if match:
                user_id = match.group(1)
                user_name = match.group(2)
                image_tag = soup.select_one("td img")

            image_url = image_tag.get('src') if image_tag else None
            
            loader.add_value('userId', user_id)
            loader.add_value('name', user_name)
            loader.add_value('totalRatings', ratings_count)
            loader.add_value('totalReviews', reviews_count)
            loader.add_value('avgRating', avg_rating)
            loader.add_value('profileUrl', canonical_link)
            loader.add_value('imageUrl', image_url)

            yield loader.load_item()
        else:       
            ratings_count = response.css('.profilePageUserStatsInfo a::text').re_first(r"(\d+)\s+ratings")
            avg_rating = response.css('.profilePageUserStatsInfo a::text').re_first(r"\((\d+\.\d+)\s+avg\)")

            reviews_count = response.css('.profilePageUserStatsInfo a::text').re_first(r"(\d+)\s+reviews")

            canonical_link = response.css('link[rel="canonical"]::attr(href)').get()

            match = re.search(r"/user/show/(\d+)-(\w+)", canonical_link)

            if match:
                user_id = match.group(1)
                user_name = match.group(2)
                image_url = response.xpath(f'//img[translate(@alt, "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz") = "{user_name.lower()}"]/@src').get()
            
            loader.add_value('userId', user_id)
            loader.add_value('name', user_name)
            loader.add_value('totalRatings', ratings_count)
            loader.add_value('totalReviews', reviews_count)
            loader.add_value('avgRating', avg_rating)
            loader.add_value('profileUrl', canonical_link)
            loader.add_value('imageUrl', image_url)
            ratings = []
            review_list_url = f"https://www.goodreads.com/review/list/{user_id}-{user_name}?shelf=read"
            # yield loader.load_item()

            yield scrapy.Request(
                url=review_list_url,
                callback=self.parse_review,
                meta={'loader': loader, 'rating': ratings}
            )
            # yield loader.load_item()
    
    def parse_review(self, response):
        loader = response.meta['loader']
        ratings = response.meta.get('rating', [])

        user_id = loader.get_output_value('userId')

        # Parse reviews using CSS selectors or XPath
        reviews = response.css('tr.bookalike.review')

        for review in reviews:
            # Extract data for each book in the review list
            book_href = review.css('td.field.title .value a::attr(href)').get()
            isbn = review.css('td.field.isbn .value::text').get(default='').strip()
            isbn13 = review.css('td.field.isbn13 .value::text').get(default='').strip()

            # Extract rating
            raw_rating = review.css('td.field.rating .value span::attr(title)').get(default='').strip()
            rating_value = (
                raw_rating.lower()
                .replace("it was ", "")
                .replace("amazing", "5")
                .replace("really liked it", "4")
                .replace("liked it", "3")
                .replace("it was ok", "2")
                .replace("did not like it", "1")
                .strip()
            )

            # Construct a review dictionary
            review_data = {
                'user_id': user_id,
                'isbn': isbn,
                'isbn13': isbn13,
                'book_href': f"https://www.goodreads.com{book_href}" if book_href else None,
                'rating': rating_value
            }

            # Log or collect review data
            # self.logger.info(review_data)
            ratings.append(review_data)

        # Add the entire list of ratings to the loader
        # loader.add_value('rating', ratings)

        # Look for the "Next" button with rel="next"
        next_page = response.css('a.next_page[rel="next"]::attr(href)').get()
        if next_page:
            next_page_url = response.urljoin(next_page)
            # self.logger.info("link" , next_page_url)
            yield scrapy.Request(
                url=next_page_url,
                callback=self.parse_review,
                meta={'loader': loader, 'rating': ratings}
            )
        else:
            # If no more pages, yield the final item
            loader.add_value('rating', ratings)

            yield loader.load_item()
        # Return the loader's item with all collected data
        # yield loader.load_item()

            
        

