import scrapy
from bs4 import BeautifulSoup
import re
from scrapy.loader import ItemLoader
from goodreadsscraper.items import UserItem
import pickle


class UserSpider(scrapy.Spider):
    name = "user_spider_03"
    allowed_domains = ["goodreads.com"]
    # Thêm nhiều URL tại đây
    # start_urls = [
    #     "https://www.goodreads.com/user/show/1",
    #     "https://www.goodreads.com/user/show/2",
    #     "https://www.goodreads.com/user/show/3",
    # ]
    
    start_urls= ['https://www.goodreads.com/book/show/5.Harry_Potter_and_the_Prisoner_of_Azkaban', 
     'https://www.goodreads.com/book/show/8.Harry_Potter_Boxed_Set_Books_1_5', 
     'https://www.goodreads.com/book/show/10.Harry_Potter_Collection', 
     'https://www.goodreads.com/book/show/17.The_Hitchhiker_s_Guide_to_the_Galaxy', 
     'https://www.goodreads.com/book/show/10.Harry_Potter_Collection', 
     'https://www.goodreads.com/book/show/1.Harry_Potter_and_the_Half_Blood_Prince', 
     'https://www.goodreads.com/book/show/42844155-harry-potter-and-the-sorcerer-s-stone', 
     'https://www.goodreads.com/book/show/2.Harry_Potter_and_the_Order_of_the_Phoenix', 
     'https://www.goodreads.com/book/show/15881.Harry_Potter_and_the_Chamber_of_Secrets']

    # with open('data/clean/list_source.pkl', 'rb') as file:
        # start_urls = pickle.load(file)

    custom_settings = {
        'ROBOTSTXT_OBEY': False,  # Disable robots.txt
        'DOWNLOAD_DELAY': 1,      # Add delay to reduce server load
        'USER_AGENT': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36'
    }
    
    # def start_requests(self):
    #     # Nạp URL từ file pickle
    #     with open('data/clean/list_source_small.pkl', 'rb') as file:
    #         urls = pickle.load(file)
    #     for url in urls:
    #         yield scrapy.Request(url=url, callback=self.parse)

    def parse(self, response):
        soup = BeautifulSoup(response.body, 'html.parser')
        loader = ItemLoader(item=UserItem(), response=response)

        if response.css('#privateProfile'):
            # Xử lý người dùng có profile riêng tư
            self.logger.info(f"Private profile detected: {response.url}")
        else:
            # Xử lý người dùng có profile công khai
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

                review_list_url = f"https://www.goodreads.com/review/list/{user_id}-{user_name}?shelf=read"
                yield scrapy.Request(
                    url=review_list_url,
                    callback=self.parse_review,
                    meta={'loader': loader, 'rating': []}
                )

    def parse_review(self, response):
        loader = response.meta['loader']
        ratings = response.meta.get('rating', [])

        user_id = loader.get_output_value('userId')

        reviews = response.css('tr.bookalike.review')
        for review in reviews:
            book_href = review.css('td.field.title .value a::attr(href)').get()
            isbn = review.css('td.field.isbn .value::text').get(default='').strip()
            isbn13 = review.css('td.field.isbn13 .value::text').get(default='').strip()

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

            review_data = {
                'user_id': user_id,
                'isbn': isbn,
                'isbn13': isbn13,
                'book_href': f"https://www.goodreads.com{book_href}" if book_href else None,
                'rating': rating_value
            }

            ratings.append(review_data)

        next_page = response.css('a.next_page[rel="next"]::attr(href)').get()
        if next_page:
            next_page_url = response.urljoin(next_page)
            yield scrapy.Request(
                url=next_page_url,
                callback=self.parse_review,
                meta={'loader': loader, 'rating': ratings}
            )
        else:
            loader.add_value('rating', ratings)
            yield loader.load_item()
