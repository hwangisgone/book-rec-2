import os
import json
from dotenv import load_dotenv
import requests
import math

# Load environment variables from .env file
load_dotenv()

class GraphQLCrawler:
    def __init__(self, 
                 url, 
                 base_query, 
                 base_filename='export'):
        """
        Advanced GraphQL crawler with precise range calculation
        
        Args:
            url (str): GraphQL endpoint URL
            base_query (str): Base GraphQL query string with offset placeholder
            base_filename (str): Base name for output JSON files
            start (int): Starting offset
            end (int): Ending offset
            step (int): Increment for each request
            max_per_file (int): Maximum number of items to store before dumping to file
        """
        self.url = url
        self.base_query = base_query
        self.base_filename = base_filename

        # Read Authorization from .env file
        auth_token = os.getenv('GRAPHQL_AUTH_TOKEN', '')
        
        # Validate auth token
        if not auth_token:
            raise ValueError("GRAPHQL_AUTH_TOKEN not found in .env file")

        self.headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': f'Bearer {self.auth_token}'
        }
    
    def fetch_data(self, offset):
        """
        Fetch GraphQL data for specific offset
        
        Args:
            offset (int): Current offset for request
        Returns:
            list: Parsed GraphQL response items or empty list
        """
        
        query = self.base_query.format('OFFSET', offset)
        
        try:
            response = requests.post(
                self.url, 
                json={'query': query}, 
                headers=self.headers
            )
            response.raise_for_status()
            
            # Extract items from response (adjust based on your GraphQL schema)
            data = response.json().get('data', {}).get('products', [])
            return data
        
        except requests.RequestException as e:
            print(f"GraphQL Request Error at offset {offset}: {e}")
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
            items = self.fetch_data(offset)

            if not items:
                break

            collected_data.extend(items)

            # Write JSON file
            with open(filepath, 'w', encoding='utf-8') as f:
                json.dump(collected_data, f, indent=2, ensure_ascii=False)

            print(f"Offset: {offset}")
        
        print(f"Exported: {filename}")
    

def main():
    # Example GraphQL query with offset placeholder
    base_query = '''
    query {
        products(offset: {OFFSET}, limit: 100) {
            id
            name
            price
            category
        }
    }
    '''
    
    # Initialize and run crawler
    crawler = GraphQLCrawler(
        url='https://your-graphql-endpoint.com/graphql',
        base_query=base_query,
        base_filename='hardcover',
    )

    global_start = 0
    global_end   = 100
    max_per_file = 50
    step         = 10

    total_range = global_end - global_start
    num_files = math.ceil(total_range / (max_per_file * step))
        
    for file_index in range(num_files):
        file_start = global_start + (file_index * max_per_file)
        file_end = min(file_start + max_per_file, global_end)

        crawler.export_api_to_json(file_start, file_end, step)

if __name__ == '__main__':
    main()
