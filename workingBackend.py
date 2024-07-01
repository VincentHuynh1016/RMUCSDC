from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_pymongo import PyMongo

app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb://localhost:27017/myDatabase"
mongo = PyMongo(app)
CORS(app)

@app.route('/api/submitRating', methods=['POST'])
def submit_rating():
    data = request.get_json()
    happinessRating = data.get('happinessRating')

    if happinessRating is None:
        return jsonify({"success": False, "message": "No rating provided"}), 400

    try:
        mongo.db.happinessRatings.insert_one({"rating": happinessRating})
        return jsonify({"success": True, "message": "Rating submitted successfully"}), 200
    except Exception as e:
        return jsonify({"success": False, "message": f"Database error: {e}"}), 500

if __name__ == '__main__':
    app.run(debug=True, port = 8080)
