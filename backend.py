from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_pymongo import PyMongo
from bson import ObjectId
from datetime import datetime

app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb://localhost:27017/myDatabase"
mongo = PyMongo(app)
CORS(app)

@app.route('/submitRating', methods=['POST'])
def submit_rating():
    data = request.get_json()
    
    # Retrieve each rating from the incoming JSON
    racoon_rating = data.get('racoonRating', 0)
    wifi_rating = data.get('wifiRating', 0)
    location_rating = data.get('locationRating', 0)
    diningHall_rating = data.get('diningHallRating', 0)
    dormRatings = data.get('dormRating',0)
    safety_Ratings = data.get('safetyRating', 0)
    amentities_rating = data.get('amenitiesRating', 0)
    comment = data.get('comment', "")

    current_date = datetime.utcnow().strftime("%b %d, %Y")

    try:
        # Insert the ratings into MongoDB
        mongo.db.ratings.insert_one({
            "racoon_rating": racoon_rating,
            "wifi_rating": wifi_rating,
            "location_rating": location_rating,
            "diningHall_rating": diningHall_rating,
            "dorm_ratings": dormRatings,
            "safety_ratings": safety_Ratings,
            "amenities_rating": amentities_rating,
            "comment": comment,
            "date": current_date

        })
        return jsonify({"success": True, "message": "Ratings submitted successfully"}), 200
    except Exception as e:
        print(f"Error inserting data: {e}")
        return jsonify({"success": False, "message": "Database error"}), 500


#Grabbing all the data so I can show it on the website
@app.route('/getRatings', methods=['GET'])
def get_ratings():
    try:
        ratings = list(mongo.db.ratings.find())
        for rating in ratings:
            rating['_id'] = str(rating['_id'])  # Convert ObjectId to string
        return jsonify(ratings), 200
    except Exception as e:
        print(f"Error retrieving data: {e}")
        return jsonify({"success": False, "message": "Database error"}), 500



if __name__ == '__main__':
    app.run(debug=True, port = 8080)
