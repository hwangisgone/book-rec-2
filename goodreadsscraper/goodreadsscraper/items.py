# Define here the models for your scraped items
#
# See documentation in:
# https://docs.scrapy.org/en/latest/topics/items.html

import scrapy

class BookItem(scrapy.Item):
    bookId = scrapy.Field()
    isbn = scrapy.Field()
    isbn13 = scrapy.Field()
    title = scrapy.Field()
    # titleComplete = scrapy.Field()
    description = scrapy.Field()
    imageUrl = scrapy.Field()
    genres = scrapy.Field()
    asin = scrapy.Field()
    publisher = scrapy.Field()
    series = scrapy.Field()
    author = scrapy.Field()
    publishDate = scrapy.Field()
    numPages = scrapy.Field()
    # format = scrapy.Field()
    language = scrapy.Field()
    ebookPrice = scrapy.Field()
    reviewsCount = scrapy.Field()
    ratingsCount = scrapy.Field()
    ratingHistogram = scrapy.Field()
    crawlSource = scrapy.Field()
    averageRating = scrapy.Field() 

class ReivewItem(scrapy.Item):
    isbn = scrapy.Field()
    isbn13 = scrapy.Field()
    rating = scrapy.Field()  
    linkjs = scrapy.Field()
    bookId = scrapy.Field()
    tokens = scrapy.Field()
    allReviews = scrapy.Field()

class UserItem(scrapy.Item):
    userId = scrapy.Field()
    name = scrapy.Field()
    totalRatings = scrapy.Field()
    totalReviews = scrapy.Field()
    avgRating = scrapy.Field()
    profileUrl = scrapy.Field()
    imageUrl = scrapy.Field()



