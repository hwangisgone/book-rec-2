import scrapy
from bs4 import BeautifulSoup
import re
from scrapy.loader import ItemLoader
from goodreadsscraper.items import UserItem

class UserSpider(scrapy.Spider):
    name = 'group_spider2'
    start_urls = ['https://www.goodreads.com/group/85538-oprah-s-book-club-official/members']

    def parse(self, response):
        for user in response.css('div.elementList'):
            loader = ItemLoader(item=UserItem(), selector=user)
            href = user.css('a.userName::attr(href)').get()
            full_url = response.urljoin(href)
                
            loader.add_value('profileUrl', full_url)

            next_page = response.css('a.next_page[rel="next"]::attr(href)').get()
            # if next_page:
            #     next_page_url = response.urljoin(next_page)
            #     # self.logger.info("link" , next_page_url)
            #     yield scrapy.Request(
            #         url=next_page_url,
            #         callback=self.parse,
            #         meta={'loader': loader}
            #     )
            yield loader.load_item()

  