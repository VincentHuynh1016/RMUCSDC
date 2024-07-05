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

const getRatingColor = (rating: number) => {
  if (rating >= 1 && rating <= 2.9) {
    return "#FFCDD2"; 
  } else if (rating >= 3 && rating <= 3.9) {
    return "#FFF9C4"; 
  } else if (rating >= 4 && rating <= 5) {
    return "#C8E6C9";
  }
  return "transparent"; 
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

      <div className="flex justify-between items-center">
        <div
          className="flex items-start bg-white p-4 rounded-md shadow-lg"
          style={{
            maxWidth: "1050px",
            width: "100%",
            marginRight: "auto",
            marginLeft: "140px",
          }}
        >
          <div
            className="overall-score flex flex-col items-center justify-center w-1/3 p-4 border-r"
            style={{ marginTop: "120px" }}
          >
            <h1 className="text-6xl font-bold text-black">
              {overallScore !== null ? overallScore.toFixed(1) : "-"}
            </h1>
            <p style={{ color: "black" }}>Overall Quality</p>
          </div>

          <div className="flex flex-wrap justify-between w-2/3 p-4">
            {averages ? (
              <>
                <div className="flex flex-col w-1/2">
                  <div className="rating-item flex justify-between mb-2">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        shape-rendering="geometricPrecision"
                        text-rendering="geometricPrecision"
                        image-rendering="optimizeQuality"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        viewBox="0 0 512 449.31"
                        width="30"
                        height="30"
                        className="mr-2"
                      >
                        <path
                          fill="#9E9087"
                          d="M16.53 314.24c85.59 157.41 341.19 203.4 481.8-5.25 12.65-18.77 12.35-32.74 3.14-65.8-8.79-31.59-21.72-60.1-37.61-85.23C502.02 106.74 516.55 52.01 510.78.97 461-5.38 413.81 19.82 368.15 63.66c-41.49-24.69-86.58-36.01-127.82-31.96-33.29 4.09-65.46 15.96-94.81 33.62a.36.36 0 00-.08-.12C99.28 20.41 51.57-5.45 1.22.97-4.6 52.43 10.2 107.65 49.09 159.23c-16.72 25.67-29.6 53.79-37.48 83.03-9.03 33.5-11.45 41.86 4.92 71.98z"
                        />
                        <path
                          fill="#7B6D68"
                          d="M61.72 139.05C40.8 106.65 32.99 72.67 36.6 40.77c31.29-3.99 61.11 9.97 90 35.24l.03.02c-24.66 17.01-46.75 38.54-64.91 63.02zM451.29 137.53c20.22-31.96 27.74-65.41 24.19-96.83-30.69-3.91-59.96 9.44-88.33 33.79 23.65 16.27 45.63 37.45 64.14 63.04z"
                        />
                        <path
                          fill="#464654"
                          d="M252.85 408.26c-91.81-12.59-162.77-66.65-190.19-131.88 21.8-49.26 51.76-78.51 87.76-92.31 56.6-21.69 94.55 9.16 73.57 71.19-3.38 10-7.88 20.59-12.89 31.5-28.5 51.81-16.7 92.87 41.75 121.5zM259.14 408.26c91.82-12.59 162.77-66.65 190.2-131.88-21.8-49.26-51.76-78.51-87.77-92.31-56.59-21.69-94.54 9.16-73.56 71.19 3.38 10 7.88 20.59 12.88 31.5 28.51 51.81 16.7 92.87-41.75 121.5z"
                        />
                        <ellipse
                          fill="#fff"
                          cx="256.27"
                          cy="352.86"
                          rx="79.51"
                          ry="60.19"
                        />
                        <ellipse
                          fill="#464654"
                          cx="256.27"
                          cy="333.63"
                          rx="43.28"
                          ry="31.03"
                        />
                        <path
                          fill="#969A9F"
                          fill-rule="nonzero"
                          d="M182.77 193.56c7.41 0 14.13 3.01 18.98 7.86 4.86 4.86 7.87 11.57 7.87 18.98s-3.01 14.13-7.87 18.98a26.745 26.745 0 01-18.98 7.87c-7.41 0-14.12-3.01-18.98-7.87a26.736 26.736 0 01-7.86-18.98c0-7.41 3-14.12 7.86-18.98 4.86-4.85 11.57-7.86 18.98-7.86zm16.7 10.15a23.55 23.55 0 00-16.7-6.91c-6.52 0-12.43 2.64-16.69 6.91a23.508 23.508 0 00-6.91 16.69c0 6.52 2.64 12.43 6.91 16.7a23.55 23.55 0 0016.69 6.91 23.591 23.591 0 0023.61-23.61c0-6.52-2.65-12.43-6.91-16.69z"
                        />
                        <circle
                          fill="#283137"
                          cx="182.77"
                          cy="220.4"
                          r="19.82"
                        />
                        <circle fill="#fff" cx="177.08" cy="217.71" r="6.9" />
                        <path
                          fill="#969A9F"
                          fill-rule="nonzero"
                          d="M329.22 193.56c7.41 0 14.13 3.01 18.98 7.86 4.86 4.86 7.87 11.57 7.87 18.98s-3.01 14.13-7.87 18.98a26.745 26.745 0 01-18.98 7.87c-7.41 0-14.12-3.01-18.98-7.87a26.778 26.778 0 01-7.86-18.98c0-7.41 3.01-14.12 7.86-18.98 4.86-4.85 11.57-7.86 18.98-7.86zm16.7 10.15a23.55 23.55 0 00-16.7-6.91c-6.52 0-12.42 2.64-16.69 6.91a23.508 23.508 0 00-6.91 16.69c0 6.52 2.64 12.43 6.91 16.7 4.27 4.26 10.17 6.91 16.69 6.91a23.591 23.591 0 0023.61-23.61c0-6.52-2.65-12.43-6.91-16.69z"
                        />
                        <circle
                          fill="#283137"
                          cx="329.22"
                          cy="220.4"
                          r="19.82"
                        />
                        <circle fill="#fff" cx="323.53" cy="217.71" r="6.9" />
                      </svg>
                      <p className="text-lg font-semibold text-black mr-1">
                        Racoon Rating
                      </p>
                    </div>
                    <div
                      className="rating-value text-black px-1 py-1 rounded-md"
                      style={{
                        backgroundColor: getRatingColor(
                          averages.avg_racoon_rating
                        ),
                        padding: "5px 20px",
                        marginRight: "30px",
                      }}
                    >
                      {averages.avg_racoon_rating.toFixed(1)}
                    </div>
                  </div>

                  <div className="rating-item flex justify-between mb-2">
                    <div className="flex items-center">
                      <img
                        src="/wifi.svg"
                        alt="WiFi Icon"
                        className="mr-2"
                        width="30"
                        height="30"
                      />
                      <p className="text-lg font-semibold text-black mr-1">
                        Wifi Rating
                      </p>
                    </div>
                    <div
                      className="rating-value text-black px-1 py-1 rounded-md"
                      style={{
                        backgroundColor: getRatingColor(
                          averages.avg_wifi_rating
                        ),
                        padding: "5px 20px",
                        marginRight: "30px",
                      }}
                    >
                      {averages.avg_wifi_rating.toFixed(1)}
                    </div>
                  </div>

                  <div className="rating-item flex justify-between mb-2">
                    <div className="flex items-center">
                      <img
                        src="/geo-alt-fill.svg"
                        alt="Location Icon"
                        width="24"
                        height="24"
                        className="mr-2"
                      />
                      <p className="text-lg font-semibold text-black mr-1">
                        Location Rating
                      </p>
                    </div>
                    <div
                      className="rating-value text-black px-1 py-1 rounded-md"
                      style={{
                        backgroundColor: getRatingColor(
                          averages.avg_location_rating
                        ),
                        padding: "5px 20px",
                        marginRight: "30px",
                      }}
                    >
                      {averages.avg_location_rating.toFixed(1)}
                    </div>
                  </div>

                  <div className="rating-item flex justify-between mb-2">
                    <div className="flex items-center">
                      <img
                        src="/food-restaurant-svgrepo-com.svg"
                        alt="Food Dish Icon"
                        width="30"
                        height="30"
                        className="mr-2"
                      />
                      <p className="text-lg font-semibold text-black mr-1">
                        Dining Hall Rating
                      </p>
                    </div>
                    <div
                      className="rating-value text-black px-1 py-1 rounded-md"
                      style={{
                        backgroundColor: getRatingColor(
                          averages.avg_diningHall_rating
                        ),
                        padding: "5px 20px",
                        marginRight: "30px",
                      }}
                    >
                      {averages.avg_diningHall_rating.toFixed(1)}
                    </div>
                  </div>

                  <div className="rating-item flex justify-between mb-2">
                    <div className="flex items-center">
                      <img
                        src="/bed-2-svgrepo-com.svg"
                        alt="Bed Icon"
                        width="40"
                        height="40"
                        className="mr-2"
                      />
                      <p className="text-lg font-semibold text-black mr-1">
                        Dorm Rating
                      </p>
                    </div>
                    <div
                      className="rating-value text-black px-1 py-1 rounded-md"
                      style={{
                        backgroundColor: getRatingColor(
                          averages.avg_dorm_ratings
                        ),
                        padding: "5px 20px",
                        marginRight: "30px",
                      }}
                    >
                      {averages.avg_dorm_ratings.toFixed(1)}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col w-1/2">
                  <div className="rating-item flex justify-between mb-2">
                    <div className="flex items-center">
                      <img
                        src="/safety-svgrepo-com.svg"
                        alt="Safety Icon"
                        width="30"
                        height="30"
                        className="mr-2"
                      />
                      <p className="text-lg font-semibold text-black mr-1">
                        Safety Rating
                      </p>
                    </div>
                    <div
                      className="rating-value text-black px-1 py-1 rounded-md"
                      style={{
                        backgroundColor: getRatingColor(
                          averages.avg_safety_ratings
                        ),
                        padding: "5px 20px",
                        marginRight: "30px",
                      }}
                    >
                      {averages.avg_safety_ratings.toFixed(1)}
                    </div>
                  </div>

                  <div className="rating-item flex justify-between mb-2">
                    <div className="flex items-center">
                      <img
                        src="/kitchen-room-svgrepo-com.svg"
                        alt="Amenities Icon"
                        width="30"
                        height="30"
                        className="mr-2"
                      />
                      <p className="text-lg font-semibold text-black mr-1">
                        Amenities Rating
                      </p>
                    </div>
                    <div
                      className="rating-value text-black px-1 py-1 rounded-md"
                      style={{
                        backgroundColor: getRatingColor(
                          averages.avg_amenities_rating
                        ),
                        padding: "5px 20px",
                        marginRight: "30px",
                      }}
                    >
                      {averages.avg_amenities_rating.toFixed(1)}
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <p className="text-black">No average ratings available.</p>
            )}
          </div>
        </div>

        <div style={{ marginRight: "50px" }}>
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
