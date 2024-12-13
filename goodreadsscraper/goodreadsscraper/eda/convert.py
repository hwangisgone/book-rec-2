# import pandas as pd
# import json

# # Load the JSON file
# with open('books_data50_60k.json', 'r') as file:
#     data = json.load(file)

# # Function to remove brackets
# def remove_brackets(data_list):
#     cleaned_data = []
#     for item in data_list:
#         clean_item = {k: (v[0] if isinstance(v, list) and len(v) == 1 else v) for k, v in item.items()}
#         cleaned_data.append(clean_item)
#     return cleaned_data

# # Apply the function to the data
# clean_data = remove_brackets(data)

# # Convert to pandas DataFrame
# df = pd.DataFrame(clean_data)

# # Save to CSV
# df.to_csv('books_data.csv', index=False)

# print("Conversion complete and brackets removed!")
import json

# Load the JSON file
with open('books_data50_60k.json', 'r') as file:
    data = json.load(file)

# Function to remove brackets from lists with a single element
def remove_brackets(data_list):
    cleaned_data = []
    for item in data_list:
        clean_item = {k: (v[0] if isinstance(v, list) and len(v) == 1 else v) for k, v in item.items()}
        cleaned_data.append(clean_item)
    return cleaned_data

# Apply the function to the data
clean_data = remove_brackets(data)

# Save the cleaned JSON data back to a file
with open('data.json', 'w') as file:
    json.dump(clean_data, file, indent=4)

print("Brackets removed and JSON saved!")
