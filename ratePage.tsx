"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";


function ratingPage() {
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

  const [message, setMessage] = useState("");
  

  const submitRating = async () => {
    try {
      const response = await fetch("http://localhost:8080/submitRating", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          racoonRating: racoonRating,
          wifiRating: wifiRating,
          locationRating: locationRating,
          diningHallRating: diningHallRating,
          dormRating: dormRating,
          safetyRating: safetyRating,
          amenitiesRating: amenitiesRating,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage(data.message);
        setRacoonRating(0);
        setWifiRating(0);
        setlocationRating(0);
        setdiningHallRating(0);
        setdormRating(0);
        setsafetyRating(0);
        setamenitiesRating(0);
      } else {
        throw new Error(data.message || "Submission failed");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Failed to connect to server");
    }
  };


  return (
    <div
      id="wrapper"
      className="w-full flex flex-col bg-white items-center overflow-hidden"
    >
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

      <div
        className="flex justify-between items-center px-4 py-2 border rounded shadow mt-10"
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
          <p className="text-base text-gray-600" style={{ lineHeight: "1.5" }}>
            Consider the amount of racoons you have seen in the area
          </p>
        </div>

        <div className="rating">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              style={{
                background: "none",
                border: "none",
                color: racoonRating >= star ? "#ffd700" : "#d3d3d3",
                fontSize: "2rem",
                cursor: "pointer",
              }}
              onClick={() => handleRacoonRating(star)}
            >
              ★
            </button>
          ))}
        </div>
      </div>

      <div
        className="flex justify-between items-center px-4 py-2 border rounded shadow mt-10"
        style={{ width: "800px", height: "120px" }}
      >
        <div style={{ maxWidth: "calc(100% - 5rem)" }}>
          {" "}
          <p className="text-2xl font-semibold">
            <span style={{ color: "black" }}>Rate </span>
            <span style={{ color: "black" }}>the </span>
            <span style={{ color: "#3F92F2" }}>Wifi </span>
          </p>
          <p className="text-base text-gray-600" style={{ lineHeight: "1.5" }}>
            Consider the speed and performance
          </p>
        </div>

        <div className="rating">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              style={{
                background: "none",
                border: "none",
                color: wifiRating >= star ? "#ffd700" : "#d3d3d3",
                fontSize: "2rem",
                cursor: "pointer",
              }}
              onClick={() => handleWifiRating(star)}
            >
              ★
            </button>
          ))}
        </div>
      </div>

      <div
        className="flex justify-between items-center px-4 py-2 border rounded shadow mt-10"
        style={{ width: "800px", height: "120px" }}
      >
        <div style={{ maxWidth: "calc(100% - 5rem)" }}>
          {" "}
          <p className="text-2xl font-semibold">
            <span style={{ color: "black" }}>Rate </span>
            <span style={{ color: "black" }}>the </span>
            <span style={{ color: "#3F92F2" }}>Location </span>
          </p>
          <p className="text-base text-gray-600" style={{ lineHeight: "1.5" }}>
            Consider how near it is to everything else
          </p>
        </div>

        <div className="rating">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              style={{
                background: "none",
                border: "none",
                color: locationRating >= star ? "#ffd700" : "#d3d3d3",
                fontSize: "2rem",
                cursor: "pointer",
              }}
              onClick={() => handlelocationRating(star)}
            >
              ★
            </button>
          ))}
        </div>
      </div>

      <div
        className="flex justify-between items-center px-4 py-2 border rounded shadow mt-10"
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
              onClick={() => handlediningHallRating(star)}
            >
              ★
            </button>
          ))}
        </div>
      </div>

      <div
        className="flex justify-between items-center px-4 py-2 border rounded shadow mt-10"
        style={{ width: "800px", height: "120px" }}
      >
        <div style={{ maxWidth: "calc(100% - 5rem)" }}>
          {" "}
          <p className="text-2xl font-semibold">
            <span style={{ color: "black" }}>Rate </span>
            <span style={{ color: "black" }}>the </span>
            <span style={{ color: "#3F92F2" }}>Dorm </span>
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
              onClick={() => handleddormRating(star)}
            >
              ★
            </button>
          ))}
        </div>
      </div>

      <div
        className="flex justify-between items-center px-4 py-2 border rounded shadow mt-10"
        style={{ width: "800px", height: "120px" }}
      >
        <div style={{ maxWidth: "calc(100% - 5rem)" }}>
          {" "}
          <p className="text-2xl font-semibold">
            <span style={{ color: "black" }}>Rate </span>
            <span style={{ color: "black" }}>the </span>
            <span style={{ color: "#3F92F2" }}>Safety </span>
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
              onClick={() => handlesafetyRating(star)}
            >
              ★
            </button>
          ))}
        </div>
      </div>

      <div
        className="flex justify-between items-center px-4 py-2 border rounded shadow mt-10"
        style={{ width: "800px", height: "120px" }}
      >
        <div style={{ maxWidth: "calc(100% - 5rem)" }}>
          {" "}
          <p className="text-2xl font-semibold">
            <span style={{ color: "black" }}>Rate </span>
            <span style={{ color: "black" }}>the </span>
            <span style={{ color: "#3F92F2" }}>Amenities </span>
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
              onClick={() => handleamenitiesRating(star)}
            >
              ★
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={submitRating}
        className="btn btn-active text-white bg-sky-400 mt-4"
      >
        Submit Rating
      </button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default ratingPage;
