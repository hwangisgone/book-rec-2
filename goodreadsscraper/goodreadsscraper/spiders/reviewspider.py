import scrapy
import json
from bs4 import BeautifulSoup
from scrapy.loader import ItemLoader
from goodreadsscraper.items import ReivewItem

class ReivewSpider(scrapy.Spider):
    name = 'review_spider'
    start_urls = ['https://www.goodreads.com/book/show/2657']

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

            if not isbn:  # If ISBN is missing, try to extract it
                url_shelves = book_stats.get('editions', {}).get('webUrl')
                if url_shelves:
                    yield scrapy.Request(
                        url=url_shelves,
                        callback=self.get_isbn,
                    )
                    
                    
                    

            # Extract reviews from the JSON
            reviews = [
                book_data[key]
                for key in book_data.keys()
                if key.startswith('Review:')
            ]

            for review_data in reviews:
                # Extract user data for the review
                user_ref = review_data.get('creator', {}).get('__ref', '')
                user_data = book_data.get(user_ref, {})

                loader = ItemLoader(item=ReivewItem(), response=response)
                loader.add_value('isbn', isbn.get('id'))
                loader.add_value('rating', review_data.get('rating'))

                yield loader.load_item()

    def get_isbn(self, response):
        # Get the URL of the page you want to scrape (this is now available as the `response` object)
        soup = BeautifulSoup(response.body, 'html.parser')

        # Extract ISBN13 (example)
        isbn13 = soup.find('div', text='ISBN:').find_next('div', class_='dataValue').text.strip()
        
        # Extract ISBN10 (example)
        isbn10 = None
        isbn10_element = soup.find('div', class_='dataRow')
        if isbn10_element:
            isbn10_text = isbn10_element.find('div', class_='dataValue')
            if isbn10_text:
                isbn10 = isbn10_text.find('span', class_='greyText').text.strip()

        # Print or process the ISBNs
        print(f"Extracted ISBN13: {isbn13}, ISBN10: {isbn10}")
        
        # Return both ISBNs as a tuple (if needed for further use)
        return isbn10, isbn13
