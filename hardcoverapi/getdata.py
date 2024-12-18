import os
import csv
import json
import math
import argparse
from dotenv import load_dotenv
import requests

# Load environment variables from .env file
load_dotenv()

max_retries = 3

class GraphQLCrawler:
    def __init__(self, 
                 url, 
                 base_query, 
                 base_filename='export',
                 book_get_list=[]):
        """
        Advanced GraphQL crawler with precise range calculation
        
        Args:
            url (str): GraphQL endpoint URL
            base_query (str): Base GraphQL query string with offset placeholder
            base_filename (str): Base name for output JSON files
        """
        self.url = url
        self.base_query = base_query
        self.base_filename = base_filename
        self.book_get_list = book_get_list

        # Read Authorization from .env file
        auth_token = os.getenv('GRAPHQL_AUTH_TOKEN', '')
        
        # Validate auth token
        if not auth_token:
            raise ValueError("GRAPHQL_AUTH_TOKEN not found in .env file")

        self.headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': f'Bearer {auth_token}'
        }
    
    def fetch_data(self, offset, limit):
        """
        Fetch GraphQL data for specific offset
        
        Args:
            offset (int): Current offset for request
        Returns:
            list: Parsed GraphQL response items or empty list
        """
        
        # query = self.base_query.format(OFFSET=offset, LIMIT=limit)
        variables = {
            'OFFSET_BOOK': offset,
            'LIMIT_BOOK': limit
        }

        if self.book_get_list:
            variables = {
                'BOOKID_LIST': self.book_get_list[offset:offset+limit]
            }

        attempts = 0
        while attempts < max_retries:
            try:
                response = requests.post(
                    self.url, 
                    json={'query': self.base_query, 'variables': variables}, 
                    headers=self.headers
                )
                response.raise_for_status()
                
                response_data = response.json()

                if 'errors' in response_data:
                    error_message = response_data['errors'][0].get('message', 'Unknown error')
                    raise requests.RequestException(error_message)

                # Extract items from response (adjust based on your GraphQL schema)
                data = next(iter(response_data.get('data', {}).values()), []) # Get data.something
                return data
            
            except requests.RequestException as e:
                attempts += 1
                print(f"GraphQL Request Error at offset {offset}: {e}")

                if attempts < max_retries:
                    print("Retrying...")
                else:
                    print("Max retries reached. Returning empty list.")
                    return []
    
    def export_api_to_json(self, start_index, end_index, step):
        """
        Dump collected data to a JSON file
        
        Args:
            start_index (int): Starting index
            end_index (int): Ending index
            step (int): Step 
        """
        
        filename = f"{self.base_filename}_{start_index + 1}-{end_index}.json"
        
        os.makedirs('exports', exist_ok=True)
        filepath = os.path.join('exports', filename)

        collected_data = []
        for offset in range(start_index, end_index, step):
            # print(f"Offset {offset} test:")
            items = self.fetch_data(offset, step)
            # print(items)

            if not items:
                continue

            collected_data.extend(items)


            # Write JSON file
            with open(filepath, 'w', encoding='utf-8') as f:
                json.dump(collected_data, f, indent=2, ensure_ascii=False)
                print(f"Offset: {offset}")
        
        print(f"Count: {len(collected_data)} Exported: {filename}")

            
def parse_csv_to_list_id(csv_path):
    """Parse the first column of a CSV file into a list."""
    with open(csv_path, mode='r', newline='', encoding='utf-8') as file:
        reader = csv.reader(file)
        # Extract the first column
        first_column = [row[0] for row in reader if row]  # Ensure the row is not empty
    return list(map(int, first_column[1:]))
        
    

def main():
    parser = argparse.ArgumentParser(description="Export Hardcover API data to JSON in chunks. Will get book data sorted from most rated to least rated (minimum 100 ratings).")
    parser.add_argument("querytype", choices=['book','rating','user','book_list'], help="Type of query to make.")
    parser.add_argument("-s", "--start", type=int, default=0, help="The starting value of the range (default: 0).")
    parser.add_argument("-e", "--end", type=int, default=50, help="The ending value of the range (default: 50).")
    parser.add_argument("-t", "--step", type=int, default=1, help="Step size for the range (default: 1).")
    parser.add_argument("-m", "--max_per_file", type=int, default=10, help="Maximum number of entries per file (default: 10).")
    parser.add_argument("--book_id_file", type=str, default=None, help="Maximum number of entries per file (default: 10).")

    args = parser.parse_args()

    if args.start > args.end:
        parser.error("Start value (-s/--start) cannot be greater than end value (-e/--end).")

    global_start = args.start
    global_end = args.end
    step = args.step
    max_per_file = args.max_per_file

    querytype = args.querytype
    book_list = []


    if args.book_id_file:
        print("Book ID CSV file provided. Trying...")
        try:
            # Parse the CSV file
            book_list = parse_csv_to_list_id(args.book_id_file)
            print("First column values:")

            querytype = "book_list"
            global_end = len(book_list)
        except FileNotFoundError:
            print(f"Error: File not found at path '{args.book_id_file}'.")
        except Exception as e:
            print(f"Error: Failed to process the file. Details: {e}")
    else:
        if querytype == "book_list":
           print(f"Error: Must provide path")
           return
        
    
    print(f'Starting {querytype} ({global_start}-{global_end},step: {step},max: {max_per_file})')

    # Example GraphQL query with offset placeholder
    base_book_query = '''
    query GetBook($OFFSET_BOOK: Int!, $LIMIT_BOOK: Int!) {
      books(
        # where: {ratings_count: {_gt: 10}}
        # order_by: {id: desc}
        limit: $LIMIT_BOOK
        offset: $OFFSET_BOOK
      ) {
        cached_tags
        cached_image
        cached_contributors
        id
        # editions {
        #   id
        # }
        slug
        dto_combined
      }
    }
    '''

    book_list_query = '''
    query GetBookFromList($BOOKID_LIST: [Int!]) {
      books(where: {id: {_in: $BOOKID_LIST}}) {
        cached_tags
        cached_image
        cached_contributors
        id
        slug
        dto_combined
      }
    }
    '''

    base_user_query = '''
    query GetUser($OFFSET_BOOK: Int!, $LIMIT_BOOK: Int!) {
      users(
        order_by: {books_count: desc}
        limit: $LIMIT_BOOK
        offset: $OFFSET_BOOK
      ) {
        id
        name
        username
        books_count
      }
    }
    '''

    user_book_query = '''
    query GetUserBook($OFFSET_BOOK: Int!, $LIMIT_BOOK: Int!) {
      user_books(
        where: {rating: {_is_null: false}}
        order_by: {date_added: asc}
        limit: $LIMIT_BOOK
        offset: $OFFSET_BOOK
      ) {
        rating
        book_id
        user_id
        date_added
        edition_id
      }
    }
    '''
    querymatcher = {
        'book': base_book_query,
        'user': base_user_query,
        'rating': user_book_query,
        'book_list': book_list_query
    }

    print(f"{querymatcher[querytype]}")
    # Count total rating is 1631328
    # Get 200000 each request/file
    # python getdata.py rating -s 0 -e 1631000 --step 200000 -m 200000

    # Count total book is 1577754
    # Max get/request: 1000
    # python getdata.py book -s 0 -e 1577700 --step 1000 -m 50000

    # Count total user is about 20k < 22k < 30k
    # Max get/request: 100
    # python getdata.py user -s 0 -e 22000 --step 100 -m 10000

    # Initialize and run crawler
    crawler = GraphQLCrawler(
        url='https://api.hardcover.app/v1/graphql',
        base_query=querymatcher[querytype],
        base_filename=f'hardcover_{querytype}',
        book_get_list=book_list
    )

    total_range = global_end - global_start
    num_files = math.ceil(total_range / max_per_file)
        
    for file_index in range(num_files):
        file_start = global_start + (file_index * max_per_file)
        file_end = min(file_start + max_per_file, global_end)

        crawler.export_api_to_json(file_start, file_end, step)


if __name__ == '__main__':
    main()
