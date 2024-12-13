import scrapy
from bs4 import BeautifulSoup
import re
from scrapy.loader import ItemLoader
from goodreadsscraper.items import UserItem

class UserSpider(scrapy.Spider):
    name = 'group_spider'
    
    # input url array here to crawl all user group 
    start_urls = ['https://www.goodreads.com/group/85538-oprah-s-book-club-official/members',
                  'https://www.goodreads.com/group/220-goodreads-librarians-group/members',
                  'https://www.goodreads.com/group/1103665-booktok-x1f4da/members']

    def parse(self, response):
        for user in response.css('div.elementList'):
            loader = ItemLoader(item=UserItem(), selector=user)
            # Extract the relative URL and convert it to absolute URL
            href = user.css('a.userName::attr(href)').get()
            full_url = response.urljoin(href)
            match = re.search(r"/user/show/(\d+)-(\w+)", full_url)
            
            if match:
                user_id = match.group(1)
                user_name = match.group(2)
                
            loader.add_value('userId', user_id)
            loader.add_value('name', user_name)
            loader.add_value('profileUrl', full_url)
            yield scrapy.Request(
                    url=full_url,
                    callback=self.parse_user,
                    meta={'loader': loader}
                )
            
            next_page = response.css('a.next_page[rel="next"]::attr(href)').get()
            if next_page:
                next_page_url = response.urljoin(next_page)
                # self.logger.info("link" , next_page_url)
                yield scrapy.Request(
                    url=next_page_url,
                    callback=self.parse,
                    meta={'loader': loader}
                )
            # yield loader.load_item()

    def parse_user(self, response):
        loader = response.meta['loader']
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
                image_tag = soup.select_one("td img")

            image_url = image_tag.get('src') if image_tag else None
            
            loader.add_value('totalRatings', ratings_count)
            loader.add_value('totalReviews', reviews_count)
            loader.add_value('avgRating', avg_rating)
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
            
            loader.add_value('totalRatings', ratings_count)
            loader.add_value('totalReviews', reviews_count)
            loader.add_value('avgRating', avg_rating)
            loader.add_value('imageUrl', image_url)
            yield loader.load_item()

            
            