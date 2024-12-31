import pickle
import pandas as pd
from flask import Flask, request, jsonify
from flask_cors import CORS

# Load train_raw_ratings and trainset from .pkl files
with open('train_raw_ratings.pkl', 'rb') as f:
    train_raw_ratings = pickle.load(f)

with open('trainset.pkl', 'rb') as f:
    trainset = pickle.load(f)

with open('similarity_baseline.pkl', 'rb') as f:
    similarity_baseline = pickle.load(f)

# Set userID from train_raw_ratings
set_userID = set([i[0] for i in train_raw_ratings])

app = Flask(__name__)

CORS(app, resources={
    r"/*": {
        "origins": ["http://localhost:5173"],  # Your frontend origin
        "methods": ["GET", "POST", "OPTIONS"],
        "allow_headers": ["Content-Type"]
    }
})

def generate_recommendationsKNN(similarity_matrix, userID=13552, like_recommend=40, get_recommend =10):
    if (userID not in set_userID) or type(userID) is not int:
        print("User id should be a valid integer from this list : \n\n {}".format(sorted(set_userID)))
        return []
    
    ''' This function generates "get_recommend" number of book recommendations using 
        KNN & item based filtering. The function needs as input three 
        different parameters:
        (1) userID i.e., userID for which recommendations need to be generated 
        (2) like_recommend i.e., number of top recommendations for the userID to be 
        considered for making recommendations 
        (3) get_recommend i.e., number of recommendations to generate for the userID
        Default values are: userID=13552, like_recommend=5, get_recommend=10
    '''
    
    userID      = trainset.to_inner_uid(userID)    # converts the raw userID to innerID
    userRatings = trainset.ur[userID]              # method .ur takes user innerID & 
                                                   # returns back user ratings
    
    
    # userRatings is a list of tuples [(,),(,),(,)..]. Each tuple contains item & rating
    # given by the user for that item. Next, the tuples will be sorted within the list 
    # in decreasing order of rating. Then top 'like_recommend' items & ratings are extracted
    
    temp_df = pd.DataFrame(userRatings).sort_values(by=1, ascending=False).\
              head(like_recommend)
    userRatings = temp_df.to_records(index=False) 
    
    # for each (item,rating) in top like_recommend user items, multiply the user rating for
    # the item with the similarity score (later is obtained from item similarity_matrix) for
    # all items. This helps calculate the weighted rating for all items. The weighted ratings 
    # are added & divided by sum of weights to estimate rating the user would give an item
    
    recommendations   = {}

    for user_top_item, user_top_item_rating  in userRatings:

        all_item_indices          =   list(pd.DataFrame(similarity_matrix)[user_top_item].index)
        all_item_weighted_rating  =   list(pd.DataFrame(similarity_matrix)[user_top_item].values*\
                                          user_top_item_rating)
        
        all_item_weights          =   list(pd.DataFrame(similarity_matrix)[user_top_item].values)
        
        
        # All items & final estimated ratings are added to a dictionary called recommendations
        
        for index in range(len(all_item_indices)):
            if index in recommendations:
                # sum of weighted ratings
                recommendations[index] += all_item_weighted_rating[index]        
            else:                        
                recommendations[index]  = all_item_weighted_rating[index]

    
    for index in range(len(all_item_indices)):                               
            if all_item_weights[index]  !=0:
                # final ratings (sum of weighted ratings/sum of weights)
                recommendations[index]   =recommendations[index]/\
                                          (all_item_weights[index]*like_recommend)
                      

    # convert dictionary recommendations to a be a list of tuples [(,),(,),(,)]
    # with each tuple being an item & estimated rating user would give that item
    # SORT the tuples within the list to be in decreasing order of estimated ratings

    temp_df = pd.Series(recommendations).reset_index().sort_values(by=0, ascending=False)
    recommendations = list(temp_df.to_records(index=False))
    
    # return get_recommend number of recommedations (only return items the user 
    # has not previously rated)
    
    final_recommendations = []
    count = 0
    
    for item, score in recommendations:
        flag = True
        for userItem, userRating in trainset.ur[userID]:
            if item == userItem: 
                flag = False       # If item in recommendations has not been rated by user, 
                break              # add to final_recommendations
        if flag == True:
            final_recommendations.append(trainset.to_raw_iid(item)) 
            count +=1              # trainset has the items stored as inner id,  
                                   # convert to raw id & append 
            
        if count > get_recommend:  # Only get 'get_recommend' number of recommendations
            break
    
    return(final_recommendations)

@app.route('/recommend', methods=['POST'])
def get_recommendations():
    try:
        # Get data from the request (userID and get_recommend)
        data = request.json
        userID = data.get('userID', 13552)
        get_recommend = data.get('get_recommend', 10)
        
        # Generate recommendations (simulating similarity_matrix input)
        recommendations = generate_recommendationsKNN(similarity_baseline, userID, get_recommend=get_recommend)
        
        # Return the recommendations as JSON
        return jsonify(recommendations)

    except Exception as e:
        print(str(e))
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)