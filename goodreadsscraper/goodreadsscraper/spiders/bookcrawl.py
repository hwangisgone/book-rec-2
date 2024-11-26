import scrapy
from bs4 import BeautifulSoup
import re
from datetime import datetime

class GoodreadsSpider(scrapy.Spider):
    name = "books"
    allowed_domains = ["goodreads.com"]
    start_urls = ["https://www.goodreads.com/book/show/929"]  # Add initial book ID

    def parse(self, response):
        # Parse the page using BeautifulSoup for more flexible parsing
        soup = BeautifulSoup(response.body, 'html.parser')

        # Extract data
        book_data = {
            "book_id": response.url.split("/")[-1],
            "book_title": self.get_book_title(soup),
            "author": self.get_author(soup),
            "author_link": self.get_author_link(soup),
            "book_cover_image": self.get_image(soup),
            "series": self.get_series(soup),
            "series_id": self.get_series_id(soup),
            "book_series_url": self.get_series_link(soup),
            "published": self.get_publication_date(soup),
            "rating": self.get_rating(soup)[0],
            "ratings_number": self.get_rating(soup)[1],
            "reviews_number": self.get_rating(soup)[2],
            "description": self.get_description(soup),
            "genre": self.get_genres(soup),
            "rating_distribution": self.get_rating_distribution(soup),
        }

        # Output the data
        yield book_data

    # Helper methods (identical to the functions in your original code)

    def get_book_title(self, soup):
        book_title_tag = soup.find("h1", {"data-testid": "bookTitle"})
        return book_title_tag.get_text().strip() if book_title_tag else None

    def get_author(self, soup):
        author_tag = soup.find("a", class_="ContributorLink")
        return author_tag.get_text().strip() if author_tag else None

    def get_series(self, soup):
        series_tag = soup.find("h3", class_="Text Text__title3 Text__italic Text__regular Text__subdued")
        return series_tag.find("a").text.strip() if series_tag else None

    def get_series_link(self, soup):
        series_tag = soup.find("h3", class_="Text Text__title3 Text__italic Text__regular Text__subdued")
        return series_tag.find("a")["href"] if series_tag else None

    def get_series_id(self, soup):
        series_link = self.get_series_link(soup)
        if series_link:
            match = re.search(r'\/series\/(\d+)', series_link)
        else:
            return None
        return int(match.group(1)) if match else None

    def get_author_link(self, soup):
        author_tag = soup.find("div", class_="ContributorLinksList")
        return author_tag.find("a")["href"] if author_tag else None

    def get_image(self, soup):
        img_tag = soup.find("img", class_="ResponsiveImage")
        return img_tag['src'] if img_tag and 'src' in img_tag.attrs else None

    def get_rating(self, soup):
        rating_element = soup.find("div", class_="RatingStatistics__rating")
        score = float(rating_element.get_text(strip=True)) if rating_element else None

        ratings_count = soup.find("span", {"data-testid": "ratingsCount"})
        reviews_count = soup.find("span", {"data-testid": "reviewsCount"})

        ratings = int(re.sub(r"[^\d]", "", ratings_count.get_text())) if ratings_count else None
        reviews = int(re.sub(r"[^\d]", "", reviews_count.get_text())) if reviews_count else None

        return [score, ratings, reviews]

    def get_description(self, soup):
        description_tag = soup.find("span", class_="Formatted")
        return description_tag.text.strip() if description_tag else None

    def get_genres(self, soup):
        genres_list_div = soup.find('div', {'data-testid': 'genresList'})
        if genres_list_div:
            genre_buttons = genres_list_div.find_all('span', class_='Button__labelItem')
            genres = [genre.text for genre in genre_buttons]
            return [g for g in genres if g != "...more"]
        return None

    def get_publication_date(self, soup):
        publication_info_tag = soup.find('p', {'data-testid': 'publicationInfo'})
        if publication_info_tag:
            date_str = publication_info_tag.get_text(strip=True).split("First published")[-1].strip()
            try:
                if ',' in date_str:
                    formatted_date = datetime.strptime(date_str, "%B %d, %Y").strftime("%m-%d-%Y")
                elif len(date_str.split()) == 2:
                    date_str = f"{date_str} 01"
                    formatted_date = datetime.strptime(date_str, "%B %d %Y").strftime("%m-%d-%Y")
                elif len(date_str.split()) == 1 and date_str.isdigit():
                    date_str = f"January 01 {date_str}"
                    formatted_date = datetime.strptime(date_str, "%B %d %Y").strftime("%m-%d-%Y")
                else:
                    return None
                return formatted_date
            except Exception:
                return None
        return None

    def get_rating_distribution(self, soup):
        rating_bars = soup.find_all('div', class_='RatingsHistogram__bar')
        rating_distribution = {}
        for bar in rating_bars:
            star_rating = bar.find('div', class_='RatingsHistogram__labelTitle').get_text(strip=True)
            rating_info = bar.find('div', class_='RatingsHistogram__labelTotal').get_text(strip=True)
            try:
                number_of_ratings, percentage = rating_info.split('(')
                number_of_ratings = int(number_of_ratings.strip().replace(',', ''))
                percentage = percentage.strip(' %)')
                rating_distribution[star_rating] = {
                    'number_of_ratings': number_of_ratings,
                    'percentage': percentage
                }
            except ValueError:
                continue
        return rating_distribution
