"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";


export default function ratingPage() {
  const [racoonRating, setRacoonRating] = useState(0);
  const [wifiRating, setWifiRating] = useState(0);
  const [locationRating, setlocationRating] = useState(0);
  const [diningHallRating, setdiningHallRating] = useState(0);
  const [dormRating, setdormRating] = useState(0);
  const [safetyRating, setsafetyRating] = useState(0);
  const [amenitiesRating, setamenitiesRating] = useState(0);

  const handleRacoonRating = (star: number) => {
    setRacoonRating(racoonRating === star ? 0 : star);
  };

  const handleWifiRating = (star: number) => {
    setWifiRating(wifiRating === star ? 0 : star);
  };

  const handlelocationRating = (star: number) => {
    setlocationRating(locationRating === star ? 0 : star);
  };

  const handlediningHallRating = (star: number) => {
    setdiningHallRating(diningHallRating === star ? 0 : star);
  };

  const handleddormRating = (star: number) => {
    setdormRating(dormRating === star ? 0 : star);
  };

  const handlesafetyRating = (star: number) => {
    setsafetyRating(safetyRating === star ? 0 : star);
  };

  const handleamenitiesRating = (star: number) => {
    setamenitiesRating(amenitiesRating === star ? 0 : star);
  };

  const sixth = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/submitRating", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          racoonRating: racoonRating,
        }),
      });
      if (res.ok) {
        console.log("It works");
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="w-full flex flex-col bg-white items-center">
      <div className="navbar bg-black justify-left">
        <Link href="/ratemydorm">
          <div className="btn btn-ghost text-xl text-black font-bold">
            <span className="text-yellow-400">R</span>
            <span className="text-yellow-300">A</span>
            <span className="text-yellow-200">T</span>
            <span className="text-yellow-100">E</span>
            <span className="text-sky-900">M</span>
            <span className="text-sky-800">Y</span>
            <span className="text-sky-700">U</span>
            <span className="text-sky-600">C</span>
            <span className="text-sky-500">S</span>
            <span className="text-sky-400">D</span>
            <span className="text-sky-300">C</span>
            <span className="text-sky-200">O</span>
            <span className="text-sky-100">L</span>
            <span className="text-cyan-200">L</span>
            <span className="text-cyan-300">E</span>
            <span className="text-cyan-400">G</span>
            <span className="text-cyan-500">E</span>
          </div>
        </Link>
      </div>
      {/* I am adding a FORM method type POST here idk what it does rn but I want it to connect to my database/backend */}
      <form onSubmit={sixth}>
        <div
          className="flex justify-between items-center px-4 py-2 border rounded shadow mt-20"
          style={{ width: "800px", height: "120px" }}
        >
          <div style={{ maxWidth: "calc(100% - 5rem)" }}>
            {" "}
            <p className="text-2xl font-semibold">
              <span style={{ color: "black" }}>Rate </span>
              <span style={{ color: "black" }}>the </span>
              <span style={{ color: "#3F92F2" }}>Racoon </span>
              <span style={{ color: "#3F92F2" }}>Sighting</span>
            </p>
            <p
              className="text-base text-gray-600"
              style={{ lineHeight: "1.5" }}
            >
              Consider the amount of racoons you have seen in the area
            </p>
          </div>

          <div className="rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <label key={star} className="star-label">
                <input
                  type="radio"
                  name="racoonSighting"
                  value={star}
                  className="mask mask-star-2 cursor-pointer"
                  style={{
                    backgroundColor:
                      racoonRating >= star ? "#ffd700" : "#d3d3d3", // Yellow or Gray
                    appearance: "none", // Hides the default radio input
                    width: "2rem", // Adjust the size of the star
                    height: "2rem", // Adjust the size of the star
                  }}
                  checked={racoonRating === star} // Checks all stars up to the selected rating
                  onChange={() => handleRacoonRating(star)}
                  // Adding this onClick to make sure it captures the click event properly
                  onClick={() => handleRacoonRating(star)}
                />
              </label>
            ))}
          </div>
        </div>

        <div style={{ height: "20px" }}></div>

        <div
          className="flex justify-between items-center px-4 py-2 border rounded shadow"
          style={{ width: "800px", height: "120px" }}
        >
          <div style={{ maxWidth: "calc(100% - 5rem)" }}>
            {" "}
            <p className="text-2xl font-semibold">
              <span style={{ color: "black" }}>Rate </span>
              <span style={{ color: "black" }}>the </span>
              <span style={{ color: "#3F92F2" }}>Wifi </span>
            </p>
            <p
              className="text-base text-gray-600"
              style={{ lineHeight: "1.5" }}
            >
              Consider the speed and performance
            </p>
          </div>

          <div className="rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <label key={star} className="star-label">
                <input
                  type="radio"
                  name="wifi"
                  value={star}
                  className="mask mask-star-2 cursor-pointer"
                  style={{
                    backgroundColor: wifiRating >= star ? "#ffd700" : "#d3d3d3", // Yellow or Gray
                    appearance: "none", // Hides the default radio input
                    width: "2rem", // Adjust the size of the star
                    height: "2rem", // Adjust the size of the star
                  }}
                  checked={wifiRating >= star} // Checks all stars up to the selected rating
                  onChange={() => handleWifiRating(star)}
                  // Adding this onClick to make sure it captures the click event properly
                  onClick={() => handleWifiRating(star)}
                />
              </label>
            ))}
          </div>
        </div>

        <div style={{ height: "20px" }}></div>

        <div
          className="flex justify-between items-center px-4 py-2 border rounded shadow"
          style={{ width: "800px", height: "120px" }}
        >
          <div style={{ maxWidth: "calc(100% - 5rem)" }}>
            {" "}
            <p className="text-2xl font-semibold">
              <span style={{ color: "black" }}>Rate </span>
              <span style={{ color: "black" }}>the </span>
              <span style={{ color: "#3F92F2" }}>Location </span>
            </p>
            <p
              className="text-base text-gray-600"
              style={{ lineHeight: "1.5" }}
            >
              Consider how near it is to everything else
            </p>
          </div>

          <div className="rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <label key={star} className="star-label">
                <input
                  type="radio"
                  name="location"
                  value={star}
                  className="mask mask-star-2 cursor-pointer"
                  style={{
                    backgroundColor:
                      locationRating >= star ? "#ffd700" : "#d3d3d3", // Yellow or Gray
                    appearance: "none", // Hides the default radio input
                    width: "2rem", // Adjust the size of the star
                    height: "2rem", // Adjust the size of the star
                  }}
                  checked={locationRating >= star} // Checks all stars up to the selected rating
                  onChange={() => handlelocationRating(star)}
                  // Adding this onClick to make sure it captures the click event properly
                  onClick={() => handlelocationRating(star)}
                />
              </label>
            ))}
          </div>
        </div>

        <div style={{ height: "20px" }}></div>

        <div
          className="flex justify-between items-center px-4 py-2 border rounded shadow"
          style={{ width: "800px", height: "120px" }}
        >
          <div style={{ maxWidth: "calc(100% - 5rem)" }}>
            {" "}
            <p className="text-2xl font-semibold">
              <span style={{ color: "black" }}>Rate </span>
              <span style={{ color: "black" }}>the </span>
              <span style={{ color: "#3F92F2" }}>Dining </span>
              <span style={{ color: "#3F92F2" }}>Hall </span>
              <span style={{ color: "#3F92F2" }}>Food </span>
            </p>
            <p
              className="text-base text-gray-600"
              style={{ lineHeight: "1.5" }}
            >
              Consider how tasty the dining hall food is
            </p>
          </div>

          <div className="rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <label key={star} className="star-label">
                <input
                  type="radio"
                  name="diningHall"
                  value={star}
                  className="mask mask-star-2 cursor-pointer"
                  style={{
                    backgroundColor:
                      diningHallRating >= star ? "#ffd700" : "#d3d3d3", // Yellow or Gray
                    appearance: "none", // Hides the default radio input
                    width: "2rem", // Adjust the size of the star
                    height: "2rem", // Adjust the size of the star
                  }}
                  checked={diningHallRating >= star} // Checks all stars up to the selected rating
                  onChange={() => handlediningHallRating(star)}
                  // Adding this onClick to make sure it captures the click event properly
                  onClick={() => handlediningHallRating(star)}
                />
              </label>
            ))}
          </div>
        </div>

        <div style={{ height: "20px" }}></div>

        <div
          className="flex justify-between items-center px-4 py-2 border rounded shadow"
          style={{ width: "800px", height: "120px" }}
        >
          <div style={{ maxWidth: "calc(100% - 5rem)" }}>
            {" "}
            <p className="text-2xl font-semibold">
              <span style={{ color: "black" }}>Rate </span>
              <span style={{ color: "black" }}>the </span>
              <span style={{ color: "#3F92F2" }}>Dorm </span>
            </p>
            <p
              className="text-base text-gray-600"
              style={{ lineHeight: "1.5" }}
            >
              Consider the look and vibe of the room
            </p>
          </div>

          <div className="rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <label key={star} className="star-label">
                <input
                  type="radio"
                  name="dorm"
                  value={star}
                  className="mask mask-star-2 cursor-pointer"
                  style={{
                    backgroundColor: dormRating >= star ? "#ffd700" : "#d3d3d3", // Yellow or Gray
                    appearance: "none", // Hides the default radio input
                    width: "2rem", // Adjust the size of the star
                    height: "2rem", // Adjust the size of the star
                  }}
                  checked={dormRating >= star} // Checks all stars up to the selected rating
                  onChange={() => handleddormRating(star)}
                  // Adding this onClick to make sure it captures the click event properly
                  onClick={() => handleddormRating(star)}
                />
              </label>
            ))}
          </div>
        </div>

        <div style={{ height: "20px" }}></div>

        <div
          className="flex justify-between items-center px-4 py-2 border rounded shadow"
          style={{ width: "800px", height: "120px" }}
        >
          <div style={{ maxWidth: "calc(100% - 5rem)" }}>
            {" "}
            <p className="text-2xl font-semibold">
              <span style={{ color: "black" }}>Rate </span>
              <span style={{ color: "black" }}>the </span>
              <span style={{ color: "#3F92F2" }}>Safety </span>
            </p>
            <p
              className="text-base text-gray-600"
              style={{ lineHeight: "1.5" }}
            >
              Consider the look and vibe of the room
            </p>
          </div>

          <div className="rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <label key={star} className="star-label">
                <input
                  type="radio"
                  name="safety"
                  value={star}
                  className="mask mask-star-2 cursor-pointer"
                  style={{
                    backgroundColor:
                      safetyRating >= star ? "#ffd700" : "#d3d3d3", // Yellow or Gray
                    appearance: "none", // Hides the default radio input
                    width: "2rem", // Adjust the size of the star
                    height: "2rem", // Adjust the size of the star
                  }}
                  checked={safetyRating >= star} // Checks all stars up to the selected rating
                  onChange={() => handlesafetyRating(star)}
                  // Adding this onClick to make sure it captures the click event properly
                  onClick={() => handlesafetyRating(star)}
                />
              </label>
            ))}
          </div>
        </div>

        <div style={{ height: "20px" }}></div>

        <div
          className="flex justify-between items-center px-4 py-2 border rounded shadow"
          style={{ width: "800px", height: "120px" }}
        >
          <div style={{ maxWidth: "calc(100% - 5rem)" }}>
            {" "}
            <p className="text-2xl font-semibold">
              <span style={{ color: "black" }}>Rate </span>
              <span style={{ color: "black" }}>the </span>
              <span style={{ color: "#3F92F2" }}>Amenities </span>
            </p>
            <p
              className="text-base text-gray-600"
              style={{ lineHeight: "1.5" }}
            >
              Consider the kitchen and resources available
            </p>
          </div>

          <div className="rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <label key={star} className="star-label">
                <input
                  type="radio"
                  name="amentities"
                  value={star}
                  className="mask mask-star-2 cursor-pointer"
                  style={{
                    backgroundColor:
                      amenitiesRating >= star ? "#ffd700" : "#d3d3d3", // Yellow or Gray
                    appearance: "none", // Hides the default radio input
                    width: "2rem", // Adjust the size of the star
                    height: "2rem", // Adjust the size of the star
                  }}
                  checked={amenitiesRating >= star} // Checks all stars up to the selected rating
                  onChange={() => handleamenitiesRating(star)}
                  // Adding this onClick to make sure it captures the click event properly
                  onClick={() => handleamenitiesRating(star)}
                />
              </label>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center mt-10">
          <div style={{ width: "800px" }}>
            <p className="text-2xl font-semibold">
              <span style={{ color: "black" }}>Write </span>
              <span style={{ color: "black" }}>a </span>
              <span style={{ color: "#3F92F2" }}>Review</span>
            </p>
            <p className="text-base text-gray-600 mb-4">
              Share some pros, cons and what to expect when living at Sixth
              College
            </p>
            <textarea
              className="w-full border rounded p-2 bg-white text-black"
              style={{ height: "200px", borderColor: "#3F92F2" }}
              placeholder="Write a helpful review that's at least 100 characters."
            />
          </div>
        </div>

        <div style={{ height: "20px" }}></div>

        <div className="flex item-center justify-center">
          <button
            type="submit"
            className="btn btn-active text-white bg-sky-400	flex"
          >
            Submit Rating
          </button>
        </div>
      </form>

      <div style={{ height: "100px" }}></div>
    </div>
  );
}
