import scrapy
from bs4 import BeautifulSoup
import re
import pickle
from datetime import datetime

class GoodreadsSpider(scrapy.Spider):
    name = "users"
    allowed_domains = ["goodreads.com"]
    start_urls ="https://www.goodreads.com/user/show/49286709-ayesha-van-den-brink"
   

    def parse(self, response):
        # Parse the page using BeautifulSoup for more flexible parsing
        soup = BeautifulSoup(response.body, 'html.parser')
        
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
                
            profile_data = {
                "user_id": user_id,
                "name": user_name,
                "totalRatings": ratings_count,
                "totalReviews": reviews_count,
                "avgRatingSorce": avg_rating,
                "profileUrl": canonical_link,
                "imageUrl": image_url
            }

                # Output the data
            yield profile_data
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
        
            # Extract data
            book_data = {
                "user_id": user_id,
                "name": user_name,
                "totalRatings": ratings_count,
                "totalReviews": reviews_count,
                "avgRatingSorce": avg_rating,
                "profileUrl": canonical_link,
                "imageUrl": image_url
            }

            # Output the data
            yield book_data

