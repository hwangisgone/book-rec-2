import json
import scrapy
from scrapy.loader import ItemLoader
from goodreadsscraper.items import BookItem  # Replace with your actual item class

class BookSpider(scrapy.Spider):
    name = 'book_spider'

    # def start_requests(self):
    #     start_id = 30001
    #     end_id = 50000
    #     base_url = 'https://www.goodreads.com/book/show/'

    #     for book_id in range(start_id, end_id + 1):
    #         url = f'{base_url}{book_id}'
    #         yield scrapy.Request(url=url, callback=self.parse)
    def __init__(self, inputfile="", *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.inputfile = inputfile
    
        if not self.inputfile:
            raise Exception("Input file not provided.")

    def start_requests(self): 
        with open(self.inputfile) as f: 
            data = json.load(f) 
            for entry in data: 
                if 'rating' in entry: 
                    for rating in entry['rating']: 
                        book_url = rating.get('book_href', None) 
                        if book_url: 
                            yield scrapy.Request(url=book_url, callback=self.parse)
                                                                                                                                                                                                                                                    
    def parse(self, response):
        # Extract JSON text from the <script> tag
        script_data = response.css('script#__NEXT_DATA__::text').get()
        self.logger.info(f"Parsing URL: {response.url}")
        if script_data:
            # Parse the JSON
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
            book_author = next(
                (key for key in book_data.keys() if key.startswith('Contributor:')),
                None
            )
            book_series = next(
                (key for key in book_data.keys() if key.startswith('Series:')),
                None
            )

            if book_key:
                book_info = book_data[book_key]
                book_stats = book_data[book_work]
                author = book_data[book_author]
                if book_series:  # Check if `book_series` key exists
                    series = book_data.get(book_series)  # Safely access the key
                    if series is None:
                        series_name = None
                    else:
                        series_name = series.get('title', None)  # Safely get the 'title' key
                else:
                    series_name = None

                # Use a loader to populate fields
                loader = ItemLoader(item=BookItem(), response=response)

                # Extract the relevant book data using the book key
                reviews_data = book_data.get('ROOT_QUERY', {}).get('getReviews', {})

                # Extract total review count
                total_reviews = reviews_data.get('totalCount', None)
                loader.add_value('isbn', book_info.get('details', {}).get('isbn'))
                loader.add_value('isbn13', book_info.get('details', {}).get('isbn13'))
                loader.add_value('title', book_info.get('title'))
                # loader.add_value('titleComplete', book_info.get('titleComplete'))
                loader.add_value('author', author.get('name', {}))
                loader.add_value('description', book_info.get('description({"stripped":true})'))
                loader.add_value('imageUrl', book_info.get('imageUrl'))
                loader.add_value('genres', [genre['genre']['name'] for genre in book_info.get('bookGenres', [])])
                loader.add_value('publisher', book_info.get('details', {}).get('publisher'))
                loader.add_value('series', series_name)
                loader.add_value('publishDate', book_info.get('details', {}).get('publicationTime'))
                loader.add_value('numPages', book_info.get('details', {}).get('numPages'))
                loader.add_value('language', book_info.get('details', {}).get('language', {}).get('name'))
                loader.add_value('ebookPrice', book_info.get('links({})', {}).get('primaryAffiliateLink', {}).get('ebookPrice'))
                loader.add_value('reviewsCount', total_reviews)
                loader.add_value('averageRating', book_stats.get('stats', {}).get('averageRating'))
                loader.add_value('ratingsCount', book_stats.get('stats', {}).get('ratingsCount'))
                loader.add_value('ratingHistogram', book_stats.get('stats', {}).get('ratingsCountDist'))
                loader.add_value('crawlSource', book_info.get('webUrl', {}))

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
                # self.logger.info(f"Extracted data: {loader.load_item()}")


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
        
