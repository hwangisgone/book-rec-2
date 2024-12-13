import scrapy
from bs4 import BeautifulSoup
import re
from scrapy.loader import ItemLoader
from goodreadsscraper.items import UserItem

class UserSpider(scrapy.Spider):
    name = "user_info"
    allowed_domains = ["goodreads.com"]
    start_urls = ["https://www.goodreads.com/user/show/1"]
    
    custom_settings = {
        'ROBOTSTXT_OBEY': False,
        'DOWNLOAD_DELAY': 1,
        'USER_AGENT': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36'
    }

    def parse(self, response):
        soup = BeautifulSoup(response.body, 'html.parser')
        loader = ItemLoader(item=UserItem(), response=response)

        if response.css('#privateProfile'):
            # Extract user information
            ratings_count = response.css('td .smallText::text').re_first(r"(\d+)\s+ratings")
            reviews_count = response.css('td .smallText::text').re_first(r"(\d+)\s+reviews")
            avg_rating = response.css('td .smallText a::text').re_first(r"avg rating: (\d+\.\d+)")
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
