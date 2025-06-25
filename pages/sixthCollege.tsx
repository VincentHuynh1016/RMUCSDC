// pages/sixthCollege.tsx
"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

type Backend = {
  avg_racoon_rating: number;
  avg_wifi_rating: number;
  avg_location_rating: number;
  avg_diningHall_rating: number;
  avg_dorm_ratings: number;
  avg_safety_ratings: number;
  avg_amenities_rating: number;
};

type Metric = { label: string; value: number; icon: string };
type Overall = { overall_score: number };

const API = "http://localhost:8080";

export default function SixthCollege() {
  const [overall, setOverall] = useState<number | null>(null);
  const [metrics, setMetrics] = useState<Metric[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const [avgRes, ovRes] = await Promise.all([
          fetch(`${API}/getAverageRatings`),
          fetch(`${API}/overallScore`),
        ]);
        if (!avgRes.ok || !ovRes.ok) throw new Error("API error");
        const avg: Backend = await avgRes.json();
        const ov: Overall = await ovRes.json();

        setOverall(Number(ov.overall_score.toFixed(1)));
        setMetrics([
          {
            label: "Dining Hall Food",
            value: avg.avg_diningHall_rating,
            icon: "🍽️",
          },
          { label: "Dorm Comfort", value: avg.avg_dorm_ratings, icon: "🛏️" },
          { label: "Safety", value: avg.avg_safety_ratings, icon: "🔒" },
          { label: "Amenities", value: avg.avg_amenities_rating, icon: "🏋️" },
          {
            label: "Raccoon Sightings",
            value: avg.avg_racoon_rating,
            icon: "🦝",
          },
          { label: "Wi‑Fi Quality", value: avg.avg_wifi_rating, icon: "📶" },
          { label: "Location", value: avg.avg_location_rating, icon: "📍" },
        ]);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  // Render star ratings
  const renderStars = (value: number) => {
    const stars = [];
    const fullStars = Math.floor(value);
    const hasHalfStar = value % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={`full-${i}`} className="text-amber-500">
          ★
        </span>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <span key="half" className="text-amber-500">
          ☆
        </span>
      );
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <span key={`empty-${i}`} className="text-gray-300">
          ☆
        </span>
      );
    }

    return stars;
  };

  // Color helpers
  const ratingColor = (v: number) => {
    if (v >= 4) return "text-green-600";
    if (v >= 3) return "text-amber-500";
    if (v > 0) return "text-orange-500";
    return "text-gray-400";
  };

  const bgColor = (v: number) => {
    if (v >= 4) return "bg-green-100";
    if (v >= 3) return "bg-amber-100";
    if (v > 0) return "bg-orange-100";
    return "bg-gray-100";
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
          <Link
            href="/"
            className="text-2xl font-bold text-gray-800 flex items-center"
          >
            <div className="bg-blue-600 text-white px-2 py-1 rounded mr-2">
              R
            </div>
            <span>
              ate<span className="text-blue-600">My</span>Dorm
            </span>
          </Link>
          <Link
            href="/rate"
            className="hidden sm:inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors"
          >
            ✍️ Write a Review
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col items-center">
          <h1 className="text-4xl font-bold mb-4">Sixth College</h1>

          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 w-full max-w-md">
            {overall !== null ? (
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">{overall}</div>
                <div className="flex justify-center mb-4">
                  {renderStars(overall)}
                </div>
                <p className="text-lg mb-1">out of 5</p>
                <p className="text-sm text-white/80">
                  Based on student reviews
                </p>
              </div>
            ) : (
              <div className="flex justify-center py-4">
                <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-white"></div>
              </div>
            )}

            <div className="mt-6">
              <Link
                href="/rate"
                className="block w-full py-3 bg-white text-blue-700 font-semibold rounded-lg text-center hover:bg-gray-100 transition-colors"
              >
                Write a Review
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Ratings Summary */}
      <main className="flex-grow max-w-4xl mx-auto px-6 py-8 w-full">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
            Ratings Summary
          </h2>

          {loading ? (
            <div className="space-y-5">
              {[...Array(7)].map((_, i) => (
                <div key={i} className="flex items-center justify-between py-3">
                  <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-5">
              {metrics.map(({ label, value, icon }) => (
                <div
                  key={label}
                  className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
                >
                  <div className="flex items-center">
                    <span className="text-xl mr-3">{icon}</span>
                    <span className="font-medium text-gray-700">{label}</span>
                  </div>
                  <div className="flex items-center">
                    <div className="flex mr-3">{renderStars(value)}</div>
                    <span
                      className={`w-10 text-right font-semibold ${ratingColor(
                        value
                      )}`}
                    >
                      {value.toFixed(1)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            ← Back to Home
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-6 mt-auto">
        <div className="max-w-6xl mx-auto px-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} RateMyDorm • UC San Diego
        </div>
      </footer>
    </div>
  );
}
