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
        <div
          className="border rounded p-4 bg-gray-100 text-black"
          style={{ width: "600px", maxWidth: "600px" }}
        >
          {averages ? (
            <>
              <div className="flex items-center mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 48 48"
                  className="mr-2"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M24 10.848A21.33 21.33 0 0 0 5.202 22.102a5.94 5.94 0 0 0 0 5.601a21.327 21.327 0 0 0 37.596 0a5.94 5.94 0 0 0 0-5.601A21.33 21.33 0 0 0 24 10.848"
                  />
                  <ellipse
                    cx="24"
                    cy="32.664"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    rx="6.212"
                    ry="4.702"
                  />
                  <ellipse
                    cx="24"
                    cy="32.258"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    rx="2.686"
                    ry="2.033"
                  />
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.026 28.536c1.35-2.398 1.518-5.388 0-6.815c-1.7-1.595-7.398-1.31-11.046 6.241a14.32 14.32 0 0 0 11.046 8.83"
                  />
                  <circle cx="19.156" cy="24.144" r=".75" fill="currentColor" />
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M10.674 26.653a18 18 0 0 1-1.378-2.281s3.306-4.104 7.637-4.104a4.25 4.25 0 0 1 2.633.763M7.233 19.005C6.025 16.721 5.449 12.19 5.41 9.942a1.01 1.01 0 0 1 1.03-1.036c1.937.039 6.227.539 8.377 4.018m12.157 15.612c-1.35-2.398-1.518-5.388 0-6.815c1.7-1.595 7.398-1.31 11.046 6.241a14.32 14.32 0 0 1-11.046 8.83"
                  />
                  <circle cx="28.844" cy="24.144" r=".75" fill="currentColor" />
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M37.326 26.653a18 18 0 0 0 1.378-2.281s-3.306-4.104-7.637-4.104a4.25 4.25 0 0 0-2.633.763m12.333-2.026c1.208-2.284 1.784-6.816 1.822-9.063a1.01 1.01 0 0 0-1.028-1.036c-1.937.039-6.227.539-8.377 4.018"
                  />
                </svg>
                <p>Racoon Rating: {averages.avg_racoon_rating.toFixed(1)}</p>
              </div>

              <div className="flex items-center mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  className="mr-2"
                >
                  <path
                    fill="currentColor"
                    d="m6.35 15.35l-2.1-2.15q1.55-1.55 3.55-2.375T12 10t4.213.838t3.537 2.412l-2.1 2.1q-1.125-1.125-2.588-1.737T12 13t-3.062.613T6.35 15.35M2.1 11.1L0 9q2.375-2.425 5.488-3.713T12 4t6.513 1.288T24 9l-2.1 2.1q-1.975-1.975-4.538-3.037T12 7T6.637 8.063T2.1 11.1M12 21l-3.525-3.55q.7-.7 1.613-1.075T12 16t1.913.375t1.612 1.075z"
                  />
                </svg>
                <p>Wifi Rating: {averages.avg_wifi_rating.toFixed(1)}</p>
              </div>

              <div className="flex items-center mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  className="mr-2"
                >
                  <path
                    fill="currentColor"
                    d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7"
                  />
                </svg>
                <p>
                  Location Rating:{" "}
                  {averages.avg_location_rating.toFixed(1)}
                </p>
              </div>

              <div className="flex items-center mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  className="mr-2"
                >
                  <path
                    fill="currentColor"
                    d="M6.723 1.054a.5.5 0 0 1 .265.335C7.006 1.468 7.5 3.582 7.5 5c0 .95-.442 1.797-1.13 2.346c-.25.2-.37.418-.37.6v.486q0 .035.004.066c.034.248.157 1.169.272 2.124c.113.937.224 1.959.224 2.378a2 2 0 1 1-4 0c0-.42.111-1.44.224-2.378c.115-.955.238-1.876.272-2.124L3 8.432v-.486c0-.182-.12-.4-.37-.6A3 3 0 0 1 1.5 5c0-1.413.49-3.516.512-3.61A.505.505 0 0 1 2.505 1c.28 0 .507.227.507.507v2.998A.495.495 0 1 0 4 4.5v-3a.5.5 0 0 1 1 0v3.026a.495.495 0 0 0 .99-.021v-3c0-.279.226-.505.506-.505c.022 0 .12 0 .227.054M9 5.5A4.5 4.5 0 0 1 13.5 1a.5.5 0 0 1 .5.5v5.973l.019.177a262 262 0 0 1 .229 2.24c.123 1.256.252 2.664.252 3.11a2 2 0 1 1-4 0c0-.446.129-1.854.252-3.11c.063-.637.126-1.247.173-1.699l.02-.191H10a1 1 0 0 1-1-1z"
                  />
                </svg>
                <p>
                  Dining Hall Rating:{" "}
                  {averages.avg_diningHall_rating.toFixed(1)}
                </p>
              </div>

              <div className="flex items-center mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  className="mr-2"
                >
                  <g fill="currentColor">
                    <path d="M3 6a1 1 0 0 1 .993.883L4 7v6h6V8a1 1 0 0 1 .883-.993L11 7h8a3 3 0 0 1 2.995 2.824L22 10v8a1 1 0 0 1-1.993.117L20 18v-3H4v3a1 1 0 0 1-1.993.117L2 18V7a1 1 0 0 1 1-1" />
                    <path d="M7 8a2 2 0 1 1-1.995 2.15L5 10l.005-.15A2 2 0 0 1 7 8" />
                  </g>
                </svg>
                <p>
                  Dorm Rating: {averages.avg_dorm_ratings.toFixed(1)}
                </p>
              </div>

              <div className="flex items-center mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 1024 1024"
                  className="mr-2"
                >
                  <path
                    fill="currentColor"
                    d="M512 64L128 192v384c0 212.1 171.9 384 384 384s384-171.9 384-384V192zm312 512c0 172.3-139.7 312-312 312S200 748.3 200 576V246l312-110l312 110z"
                  />
                  <path
                    fill="currentColor"
                    d="M378.4 475.1a35.91 35.91 0 0 0-50.9 0a35.91 35.91 0 0 0 0 50.9l129.4 129.4l2.1 2.1a33.98 33.98 0 0 0 48.1 0L730.6 434a33.98 33.98 0 0 0 0-48.1l-2.8-2.8a33.98 33.98 0 0 0-48.1 0L483 579.7z"
                  />
                </svg>
                <p>
                  Safety Rating:{" "}
                  {averages.avg_safety_ratings.toFixed(1)}
                </p>
              </div>

              <div className="flex items-center mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  className="mr-2"
                >
                  <path
                    fill="currentColor"
                    d="M20.57 14.86L22 13.43L20.57 12L17 15.57L8.43 7L12 3.43L10.57 2L9.14 3.43L7.71 2L5.57 4.14L4.14 2.71L2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57L3.43 12L7 8.43L15.57 17L12 20.57L13.43 22l1.43-1.43L16.29 22l2.14-2.14l1.43 1.43l1.43-1.43l-1.43-1.43L22 16.29z"
                  />
                </svg>
                <p>
                  Amenities Rating:{" "}
                  {averages.avg_amenities_rating.toFixed(1)}
                </p>
              </div>
            </>
          ) : (
            <p>No average ratings available.</p>
          )}

          {overallScore !== null && (
            <p>Overall Score: {overallScore.toFixed(1)}</p>
          )}
        </div>

        <Link href="/ratingPage">
          <button className="btn text-lg text-amber-300 w-auto px-15 flex bg-sky-700">
            Write a Review{" "}
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
