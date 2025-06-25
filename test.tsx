import React, { useState } from "react";

export default function RatingBoxes() {
  const [diningHallRating, setDiningHallRating] = useState(0);
  const [dormRating, setDormRating] = useState(0);
  const [safetyRating, setSafetyRating] = useState(0);
  const [amenitiesRating, setAmenitiesRating] = useState(0);

  const handleDiningHallRating = (rating: number) =>
    setDiningHallRating(rating);
  const handleDormRating = (rating: number) => setDormRating(rating);
  const handleSafetyRating = (rating: number) => setSafetyRating(rating);
  const handleAmenitiesRating = (rating: number) => setAmenitiesRating(rating);

  return (
    <>
      {/* Dining Hall */}
      <div
        className="flex justify-between items-center px-4 py-2 border rounded shadow mt-10"
        style={{ width: "800px", height: "120px" }}
      >
        <div style={{ maxWidth: "calc(100% - 5rem)" }}>
          <p className="text-2xl font-semibold">
            <span style={{ color: "black" }}>Rate </span>
            <span style={{ color: "black" }}>the </span>
            <span style={{ color: "#3F92F2" }}>Dining Hall Food</span>
          </p>
          <p className="text-base text-gray-600" style={{ lineHeight: "1.5" }}>
            Consider how tasty the dining hall food is
          </p>
        </div>
        <div className="rating">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              style={{
                background: "none",
                border: "none",
                color: diningHallRating >= star ? "#ffd700" : "#d3d3d3",
                fontSize: "2rem",
                cursor: "pointer",
              }}
              onClick={() => handleDiningHallRating(star)}
            >
              ★
            </button>
          ))}
        </div>
      </div>

      {/* Dorm */}
      <div
        className="flex justify-between items-center px-4 py-2 border rounded shadow mt-10"
        style={{ width: "800px", height: "120px" }}
      >
        <div style={{ maxWidth: "calc(100% - 5rem)" }}>
          <p className="text-2xl font-semibold">
            <span style={{ color: "black" }}>Rate </span>
            <span style={{ color: "black" }}>the </span>
            <span style={{ color: "#3F92F2" }}>Dorm</span>
          </p>
          <p className="text-base text-gray-600" style={{ lineHeight: "1.5" }}>
            Consider the look and vibe of the room
          </p>
        </div>
        <div className="rating">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              style={{
                background: "none",
                border: "none",
                color: dormRating >= star ? "#ffd700" : "#d3d3d3",
                fontSize: "2rem",
                cursor: "pointer",
              }}
              onClick={() => handleDormRating(star)}
            >
              ★
            </button>
          ))}
        </div>
      </div>

      {/* Safety */}
      <div
        className="flex justify-between items-center px-4 py-2 border rounded shadow mt-10"
        style={{ width: "800px", height: "120px" }}
      >
        <div style={{ maxWidth: "calc(100% - 5rem)" }}>
          <p className="text-2xl font-semibold">
            <span style={{ color: "black" }}>Rate </span>
            <span style={{ color: "black" }}>the </span>
            <span style={{ color: "#3F92F2" }}>Safety</span>
          </p>
          <p className="text-base text-gray-600" style={{ lineHeight: "1.5" }}>
            Consider your surroundings
          </p>
        </div>
        <div className="rating">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              style={{
                background: "none",
                border: "none",
                color: safetyRating >= star ? "#ffd700" : "#d3d3d3",
                fontSize: "2rem",
                cursor: "pointer",
              }}
              onClick={() => handleSafetyRating(star)}
            >
              ★
            </button>
          ))}
        </div>
      </div>

      {/* Amenities */}
      <div
        className="flex justify-between items-center px-4 py-2 border rounded shadow mt-10"
        style={{ width: "800px", height: "120px" }}
      >
        <div style={{ maxWidth: "calc(100% - 5rem)" }}>
          <p className="text-2xl font-semibold">
            <span style={{ color: "black" }}>Rate </span>
            <span style={{ color: "black" }}>the </span>
            <span style={{ color: "#3F92F2" }}>Amenities</span>
          </p>
          <p className="text-base text-gray-600" style={{ lineHeight: "1.5" }}>
            Consider the kitchen and resources available
          </p>
        </div>
        <div className="rating">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              style={{
                background: "none",
                border: "none",
                color: amenitiesRating >= star ? "#ffd700" : "#d3d3d3",
                fontSize: "2rem",
                cursor: "pointer",
              }}
              onClick={() => handleAmenitiesRating(star)}
            >
              ★
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
