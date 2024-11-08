import requests
import re
import json
import time
import bs4
from datetime import datetime
from multiprocessing.dummy import Pool  # Thread-based Pool for concurrency
from multiprocessing import cpu_count

def get_book_title(soup):
    book_title_tag = soup.find("h1", {"data-testid": "bookTitle"})
    if book_title_tag:
        return book_title_tag.get_text().strip()
    else:
        return None  # Default value when the title is not found

def get_author(soup):
    author_tag = soup.find("a", class_="ContributorLink")
    if author_tag:
        return author_tag.get_text().strip()
    else:
        return None  # Default value when the author is not found
    
def get_series(soup):
    series_tag = soup.find("h3", class_="Text Text__title3 Text__italic Text__regular Text__subdued")
    if series_tag:
        series_name = series_tag.find("a").text.strip()  # Extract text from <a> tag
        return series_name
    else:
        return None

def get_series_link(soup):
    series_tag = soup.find("h3", class_="Text Text__title3 Text__italic Text__regular Text__subdued")
    if series_tag:
        # Extract the href attribute from the <a> tag
        series_link = series_tag.find("a")["href"]
        return series_link  # Prepend base URL
    else:
        return None

def get_series_id(soup):
    series_tag = soup.find("h3", class_="Text Text__title3 Text__italic Text__regular Text__subdued")
    if series_tag:
        # Extract the href attribute from the <a> tag
        series_link = series_tag.find("a")["href"]
        match = re.search(r'\/series\/(\d+)', series_link)

        if match:
            series_id = int(match.group(1))  # Convert to integer
            return series_id
        else:
            None
    else:
        return None
    

def get_author_link(soup):
    author_tag = soup.find("div", class_="ContributorLinksList")
    if author_tag:
        # Extract the href attribute from the <a> tag
        link = author_tag.find("a")["href"]
        return link  # Prepend base URL
    else:
        return None
    
def get_image(soup):
    img_tag = soup.find("img", class_="ResponsiveImage")
    if img_tag and 'src' in img_tag.attrs:
        image_url = img_tag['src']
        return image_url
    else:
        return None

def get_rating(soup):
    # Find the average rating
    rating_element = soup.find("div", class_="RatingStatistics__rating")
    if rating_element:
        average_rating = rating_element.get_text(strip=True)
        if average_rating:
            score = float(average_rating)
        else:
            score = None
    else: 
        score = None
    

    ratings_count = soup.find("span", {"data-testid": "ratingsCount"})
    reviews_count = soup.find("span", {"data-testid": "reviewsCount"})

    # Extract numeric values
    ratings = int(re.sub(r"[^\d]", "", ratings_count.get_text())) if ratings_count else None
    reviews = int(re.sub(r"[^\d]", "", reviews_count.get_text())) if reviews_count else None
    return [
        score, ratings, reviews
    ]
    
def get_description(soup):
    # Find the <span> tag containing the description text
    description_tag = soup.find("span", class_="Formatted")
    if description_tag:
        description = description_tag.text.strip()  # Extract text and strip any extra whitespace
        return description
    else:
        return None

def get_genres(soup):
    genres = []
    # Find the div containing the genres list
    genres_list_div = soup.find('div', {'data-testid': 'genresList'})
    
    if genres_list_div:
        # Find all genre links inside this div
        genre_buttons = genres_list_div.find_all('span', class_='Button__labelItem')
        # Extract the text of each genre button
        genres = [genre.text for genre in genre_buttons]
    else: 
        return None
    # Remove the '...more' entry if it exists
    if '...more' in genres:
        genres.remove('...more')
        return genres

def get_publication_date(soup):
    # Find the <p> tag with the 'data-testid' attribute 'publicationInfo'
    publication_info_tag = soup.find('p', {'data-testid': 'publicationInfo'})
    
    # Extract the text (publication date)
    if publication_info_tag:
        publication_date = publication_info_tag.get_text(strip=True)
        date_str = publication_date.split("First published")[-1].strip()
        # Try to handle different date formats
        try:
            # Case 1: Full date with month, day, and year (e.g., "July 16, 2005")
            if ',' in date_str:
                formatted_date = datetime.strptime(date_str, "%B %d, %Y").strftime("%m-%d-%Y")
            # Case 2: Month and year only (e.g., "July 2005"), assume day 01
            elif len(date_str.split()) == 2:
                date_str = f"{date_str} 01"  # Add the first day of the month
                formatted_date = datetime.strptime(date_str, "%B %d %Y").strftime("%m-%d-%Y")
            # Case 3: Year only (e.g., "2005"), assume January 1st
            elif len(date_str.split()) == 1 and date_str.isdigit():
                date_str = f"January 01 {date_str}"  # Default to January 1st
                formatted_date = datetime.strptime(date_str, "%B %d %Y").strftime("%m-%d-%Y")
            else:
                return None
            return formatted_date
        except Exception as e:
            return None
    else:
        return None


def get_rating_distribution(soup):
    # Find all the rating bars (each rating bar corresponds to a specific star)
    rating_bars = soup.find_all('div', class_='RatingsHistogram__bar')

    rating_distribution = {}

    # Loop through each rating bar and extract the number of ratings and percentage
    for bar in rating_bars:
        #Extract the star rating label (e.g., "5 stars")
        star_rating = bar.find('div', class_='RatingsHistogram__labelTitle').get_text(strip=True)
        
        # Extract the number of ratings and percentage (e.g., "2,317,309 (68%)")
        rating_info = bar.find('div', class_='RatingsHistogram__labelTotal').get_text(strip=True)
        
        # Split the rating info to separate the number and percentage
        number_of_ratings, percentage = rating_info.split('(')
        number_of_ratings = number_of_ratings.strip().replace(',', '')  # Remove commas for conversion
        percentage = percentage.strip(' %)')

        # Convert to integers
        try:
            number_of_ratings = int(number_of_ratings)  # Convert to int
        except ValueError:
            number_of_ratings = None
            percentage = None


        # Store the result in the dictionary
        rating_distribution[star_rating] = {
            'number_of_ratings': number_of_ratings,
            'percentage': percentage
        }

    return rating_distribution


def scrape_book(book_id):
    url = 'https://www.goodreads.com/book/show/' + book_id
    response = requests.get(url)
    soup = bs4.BeautifulSoup(response.content, 'html.parser')

    time.sleep(3)
    # print(book_id);
    return {
            "book_id": book_id,
            "book_title": get_book_title(soup),
            "author": get_author(soup),
            "author_link": get_author_link(soup),
            "book_cover_image": get_image(soup),
            "series": get_series(soup),
            "series_id": get_series_id(soup),
            "book_series_url": get_series_link(soup),
            "published": get_publication_date(soup),
            "rating": get_rating(soup)[0],
            "ratings_number": get_rating(soup)[1],
            "reviews_number": get_rating(soup)[2],
            "description": get_description(soup),
            "genre": get_genres(soup),
            "rating_distribution": get_rating_distribution(soup)
    }

def save_to_json(books_data, filename="books_data.json"):
    with open(filename, "w", encoding="utf-8") as f:
        json.dump(books_data, f, ensure_ascii=False, indent=4)

def scrape_books_in_parallel(book_ids, filename="books_data.json"):
    books_data = []
    
    def process_book_id(book_id):
        return scrape_book(str(book_id))

    pool = Pool(cpu_count() * 2)  # Creates a Pool with cpu_count * 2 threads.

    with open(filename, "w", encoding="utf-8") as f:
        for book_data in pool.imap(process_book_id, book_ids, chunksize=100):  # Adjust chunksize for performance
            books_data.append(book_data)

    if len(books_data) % 100 == 0:
        save_to_json(books_data)
    # Save all the collected data to a JSON file
    save_to_json(books_data, filename)

def main():
    # Book IDs from 1 to 100,000 (adjust the range as needed)
    book_ids = range(55001, 60001)  # or your desired range
    
    # Perform the scraping in parallel and save to a JSON file
    scrape_books_in_parallel(book_ids, "books_data_55001_60000.json")

if __name__ == '__main__':
    main()

