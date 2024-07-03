"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

type Rating = {
  racoon_rating: number;
  wifi_rating: number;
  location_rating: number;
  diningHall_rating: number;
  dorm_ratings: number;
  safety_ratings: number;
  amenities_rating: number;
  comment: string;
  date: string;
};

type Averages = {
  avg_racoon_rating: number;
  avg_wifi_rating: number;
  avg_location_rating: number;
  avg_diningHall_rating: number;
  avg_dorm_ratings: number;
  avg_safety_ratings: number;
  avg_amenities_rating: number;
};

type OverallScore = {
  overall_score: number;
};

export default function SixthCollege() {
  const [ratings, setRatings] = useState<Rating[]>([]);
  const [averages, setAverages] = useState<Averages | null>(null);
  const [overallScore, setOverallScore] = useState<number | null>(null);

  const fetchRatings = async () => {
    try {
      const response = await fetch("http://localhost:8080/getRatings");
      const data = await response.json();
      setRatings(data);
    } catch (error) {
      console.error("Error fetching ratings:", error);
    }
  };

  const fetchAverages = async () => {
    try {
      const response = await fetch("http://localhost:8080/getAverageRatings");
      const data = await response.json();
      setAverages(data);
    } catch (error) {
      console.error("Error fetching averages:", error);
    }
  };

  const fetchOverallScore = async () => {
    try {
      const response = await fetch("http://localhost:8080/overallScore");
      const data: OverallScore = await response.json();
      setOverallScore(data.overall_score);
    } catch (error) {
      console.error("Error fetching overall score:", error);
    }
  };

  useEffect(() => {
    fetchRatings();
    fetchAverages();
    fetchOverallScore();
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col bg-white">
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
      <img
        className="flex self-center w-2/4 mt-10"
        src="/sixthicon.png"
        alt="Sixth College Icon"
      />

      <div className="flex justify-between items-center h-full mt-10 px-4">
        <div className="ratings-container flex flex-col items-start bg-white p-4">
          <div className="overall-score flex flex-col items-center mb-6">
            <h1 className="text-6xl font-bold text-black">
              {overallScore !== null ? overallScore.toFixed(1) : "-"}
            </h1>
            <p style={{ color: "black" }}>Overall Quality</p>
          </div>

          {averages ? (
            <>
              <div className="rating-item flex items-center mb-2">
                <p className="text-lg font-semibold mr-auto text-black">
                  Racoon Rating
                </p>
                <div className="rating-value text-black px-2 py-1 rounded-md">
                  {averages.avg_racoon_rating.toFixed(1)}
                </div>
              </div>

              <div className="rating-item flex items-center mb-2">
                <p className="text-lg font-semibold mr-auto text-black">
                  Wifi Rating
                </p>
                <div className="rating-value text-black px-2 py-1 rounded-md">
                  {averages.avg_wifi_rating.toFixed(1)}
                </div>
              </div>

              <div className="rating-item flex items-center mb-2">
                <p className="text-lg font-semibold mr-auto text-black">
                  Location Rating
                </p>
                <div className="rating-value text-black px-2 py-1 rounded-md">
                  {averages.avg_location_rating.toFixed(1)}
                </div>
              </div>

              <div className="rating-item flex items-center mb-2">
                <p className="text-lg font-semibold mr-auto text-black">
                  Dining Hall Rating
                </p>
                <div className="rating-value text-black px-2 py-1 rounded-md">
                  {averages.avg_diningHall_rating.toFixed(1)}
                </div>
              </div>

              <div className="rating-item flex items-center mb-2">
                <p className="text-lg font-semibold mr-auto text-black">
                  Dorm Rating
                </p>
                <div className="rating-value text-black px-2 py-1 rounded-md">
                  {averages.avg_dorm_ratings.toFixed(1)}
                </div>
              </div>

              <div className="rating-item flex items-center mb-2">
                <p className="text-lg font-semibold mr-auto text-black">
                  Safety Rating
                </p>
                <div className="rating-value text-black px-2 py-1 rounded-md">
                  {averages.avg_safety_ratings.toFixed(1)}
                </div>
              </div>

              <div className="rating-item flex items-center mb-2">
                <p className="text-lg font-semibold mr-auto text-black">
                  Amenities Rating
                </p>
                <div className="rating-value text-black px-2 py-1 rounded-md">
                  {averages.avg_amenities_rating.toFixed(1)}
                </div>
              </div>
            </>
          ) : (
            <p className="text-black">No average ratings available.</p>
          )}
        </div>

        <Link href="/ratingPage">
          <button className="btn text-lg text-amber-300 w-auto px-15 flex bg-sky-700">
            Write a Review
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg>
          </button>
        </Link>
      </div>

      <div className="mt-10 px-4 flex flex-col items-start">
        <h2 className="text-xl font-semibold mb-4">All Ratings</h2>
        <div
          className="w-3/4"
          style={{ marginLeft: "150px", maxWidth: "1000px" }}
        >
          {ratings.length > 0 ? (
            ratings.map((rating, index) => (
              <div
                key={index}
                className="border rounded p-4 mb-4 bg-gray-100 text-black"
              >
                <p>Racoon Rating: {rating.racoon_rating}</p>
                <p>Wifi Rating: {rating.wifi_rating}</p>
                <p>Location Rating: {rating.location_rating}</p>
                <p>Dining Hall Rating: {rating.diningHall_rating}</p>
                <p>Dorm Rating: {rating.dorm_ratings}</p>
                <p>Safety Rating: {rating.safety_ratings}</p>
                <p>Amenities Rating: {rating.amenities_rating}</p>
                <p>Comment: {rating.comment}</p>
                <p>Date: {rating.date}</p>
              </div>
            ))
          ) : (
            <p>No ratings available.</p>
          )}
        </div>
      </div>
    </div>
  );
}
