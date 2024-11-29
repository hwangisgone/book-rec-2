import scrapy
from urllib.parse import urlparse
import os

class GoodreadsSpider(scrapy.Spider):
    name = 'https'
    start_urls = ['https://www.goodreads.com/_next/static/chunks/pages/_app-e12374a01d4e1430f157.js']
    
    def parse(self, response):
        # Extract the filename from the URL
        file_url = response.url
        parsed_url = urlparse(file_url)
        file_name = os.path.basename(parsed_url.path)
        
        # Save the file with its extracted name
        with open(file_name, 'wb') as f:
            f.write(response.body)
        
        # Optionally print the file name
        print(f"Extracted file name: {file_name}")
