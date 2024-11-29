import scrapy
import json
from bs4 import BeautifulSoup
from scrapy.loader import ItemLoader
from goodreadsscraper.items import ReivewItem
from urllib.parse import urljoin

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

            if preload_link:
                full_link = urljoin(response.url, preload_link)
            # if not isbn:  # If ISBN is missing, try to extract it
            #     url_shelves = book_stats.get('editions', {}).get('webUrl')
            #     if url_shelves:
                
            # Extract reviews from the JSON
            reviews = [
                book_data[key]
                for key in book_data.keys()
                if key.startswith('Review:')
            ]
            
            loader = ItemLoader(item=ReivewItem(), response=response)
            loader.add_value('isbn', isbn)
            loader.add_value('isbn13', isbn13)
            loader.add_value('linkjs', full_link)
            
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
                yield loader.load_item()

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

        item = loader.load_item()
        ordered_item = {
            'isbn': item.get('isbn'),
            'isbn13': item.get('isbn13'),
            **item
        }

        yield ordered_item
