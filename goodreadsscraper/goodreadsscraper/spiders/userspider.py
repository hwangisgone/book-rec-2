import scrapy
from bs4 import BeautifulSoup
import re
from scrapy.loader import ItemLoader
from goodreadsscraper.items import UserItem

class UserSpider(scrapy.Spider):
    name = "user_spider"
    allowed_domains = ["goodreads.com"]
    start_urls = ["https://www.goodreads.com/user/show/520753"]
    
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

            yield loader.load_item()

