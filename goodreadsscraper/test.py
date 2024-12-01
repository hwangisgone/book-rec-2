from urllib.parse import unquote

encoded_url = "https://www.goodreads.com/book/show/8051458/reviews?reviewFilters={%22workId%22:%22kca://work/amzn1.gr.work.v1.wL0Eva4wZSadIbmTplvGHg%22,%22after%22:%22MTkzOCwxNDI5NDQ2MDE5MDAw%22}"
decoded_url = unquote(encoded_url)

print(decoded_url)
# Output: https://www.goodreads.com/book/show/11468377/reviews?reviewFilters={"workId":"kca://work/amzn1.gr.work.v1.fgboBCvf-38t9A7bG3aJrg","after":"NDYxMCwxMzMxMjM5MTI1MDAw"}

# import json

# Path to your JSON file
# file_path = 'reviews.json'  # Replace with the path to your JSON file

# # Read the JSON file
# with open(file_path, 'r', encoding='utf-8') as file:
#     data = json.load(file)

# # Get the count of reviews
# review_count = len(data['data']['getReviews']['edges'])

# print(f'Total number of reviews: {review_count}')

import requests
import json

# GraphQL API details
url = "https://kxbwmqov6jgg3daaamb744ycu4.appsync-api.us-east-1.amazonaws.com/graphql"
api_key = "da2-xpgsdydkbregjhpr6ejzqdhuwy"

# Initial query payload
payload = {
    "operationName": "getReviews",
    "variables": {
        "filters": {
            "resourceType": "WORK",
            "resourceId": "kca://work/amzn1.gr.work.v1.wL0Eva4wZSadIbmTplvGHg"
        },
        "pagination": {
            "after": "MTkzOCwxNDI5NDQ2MDE5MDAw",  # No initial "after" token
            "limit": 30
        }
    },
    "query": """
        query getReviews($filters: BookReviewsFilterInput!, $pagination: PaginationInput) {
          getReviews(filters: $filters, pagination: $pagination) {
            ...BookReviewsFragment
            __typename
          }
        }
        
        fragment BookReviewsFragment on BookReviewsConnection {
          totalCount
          edges {
            node {
              ...ReviewCardFragment
              __typename
            }
            __typename
          }
          pageInfo {
            prevPageToken
            nextPageToken
            __typename
          }
          __typename
        }
        
        fragment ReviewCardFragment on Review {
          __typename
          id
          creator {
            ...ReviewerProfileFragment
            __typename
          }
          recommendFor
          updatedAt
          createdAt
          spoilerStatus
          lastRevisionAt
          text
          rating
          shelving {
            shelf {
              name
              webUrl
              __typename
            }
            taggings {
              tag {
                name
                webUrl
                __typename
              }
              __typename
            }
            webUrl
            __typename
          }
          likeCount
          viewerHasLiked
          commentCount
        }
        
        fragment ReviewerProfileFragment on User {
          id: legacyId
          imageUrlSquare
          isAuthor
          ...SocialUserFragment
          textReviewsCount
          viewerRelationshipStatus {
            isBlockedByViewer
            __typename
          }
          name
          webUrl
          contributor {
            id
            works {
              totalCount
              __typename
            }
            __typename
          }
          __typename
        }
        
        fragment SocialUserFragment on User {
          viewerRelationshipStatus {
            isFollowing
            isFriend
            __typename
          }
          followersCount
          __typename
        }
    """
}

# Headers with API key
headers = {
    "Content-Type": "application/json",
    "x-api-key": api_key
}

# List to accumulate all nodes (reviews)
all_reviews = []

# Loop to fetch data until there is no nextPageToken
while True:
    # Send the POST request
    response = requests.post(url, headers=headers, json=payload)

    # Check the response status
    if response.status_code == 200:
        # Parse the JSON response
        data = response.json()
        reviews = data.get("data", {}).get("getReviews", {}).get("edges", [])

        # Extract reviews from the response
        for review in reviews:
            all_reviews.append(review["node"])

        # Get the nextPageToken for pagination
        next_page_token = data.get("data", {}).get("getReviews", {}).get("pageInfo", {}).get("nextPageToken")

        # If there is no nextPageToken, stop the loop
        if not next_page_token:
            break

        # Set the next "after" token for the next request
        payload["variables"]["pagination"]["after"] = next_page_token

    else:
        print(f"Failed to fetch data: {response.status_code}")
        print(response.text)
        break

# Save all the reviews to a JSON file
# Extract the "id" from "creator" and "rating" from each review
extracted_data = [{"id": review["creator"]["id"], "rating": review["rating"]} for review in all_reviews]



filename = 'all_reviews.json'
with open(filename, 'w', encoding='utf-8') as f:
    json.dump(all_reviews, f, ensure_ascii=False, indent=2)

# with open(filename, 'w', encoding='utf-8') as output_file:
#     json.dump(extracted_data, output_file, ensure_ascii=False, indent=2)

print(f"All data has been saved to {filename}")


