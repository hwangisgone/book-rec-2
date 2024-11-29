from urllib.parse import unquote

encoded_url = "https://www.goodreads.com/book/show/8051458/reviews?reviewFilters={%22workId%22:%22kca://work/amzn1.gr.work.v1.wL0Eva4wZSadIbmTplvGHg%22,%22after%22:%22MTkzOCwxNDI5NDQ2MDE5MDAw%22}"
decoded_url = unquote(encoded_url)

print(decoded_url)
# Output: https://www.goodreads.com/book/show/11468377/reviews?reviewFilters={"workId":"kca://work/amzn1.gr.work.v1.fgboBCvf-38t9A7bG3aJrg","after":"NDYxMCwxMzMxMjM5MTI1MDAw"}


import json

# Path to your JSON file
file_path = 'reviews.json'  # Replace with the path to your JSON file

# Read the JSON file
with open(file_path, 'r', encoding='utf-8') as file:
    data = json.load(file)

# Get the count of reviews
review_count = len(data['data']['getReviews']['edges'])

print(f'Total number of reviews: {review_count}')
