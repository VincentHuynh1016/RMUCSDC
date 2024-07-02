"use client";
import Image from "next/image";
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

export default function sixthCollege() {
  const [ratings, setRatings] = useState<Rating[]>([]);

  const fetchRatings = async () => {
    try {
      const response = await fetch("http://localhost:8080/getRatings");
      const data = await response.json();
      setRatings(data);
    } catch (error) {
      console.error("Error fetching ratings:", error);
    }
  };

  useEffect(() => {
    fetchRatings();
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
      ></img>

      <div className="flex justify-end items-center h-full mt-10">
        <Link href="/ratingPage">
          <button className="btn text-lg text-amber-300 w-auto px-15 mr-20 flex bg-sky-700">
            Write a Review{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 ml-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
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
