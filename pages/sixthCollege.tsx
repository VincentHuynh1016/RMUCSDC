// pages/sixthCollege.tsx
"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

/**
 * Sixth College ratings — lightweight version (no images).
 * -----------------------------------------------------------
 * • Fetches averages + overall score from Flask (port 8080).
 * • Clean Tailwind‑only UI (no <Image> components).
 * • Mobile‑first, responsive card grid.
 */

type Backend = {
  avg_racoon_rating: number;
  avg_wifi_rating: number;
  avg_location_rating: number;
  avg_diningHall_rating: number;
  avg_dorm_ratings: number;
  avg_safety_ratings: number;
  avg_amenities_rating: number;
};

type Metric = { label: string; value: number };

type Overall = { overall_score: number };

const API = "http://localhost:8080";

export default function SixthCollege() {
  const [overall, setOverall] = useState<number | null>(null);
  const [metrics, setMetrics] = useState<Metric[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const [avgRes, ovRes] = await Promise.all([
          fetch(`${API}/getAverageRatings`),
          fetch(`${API}/overallScore`),
        ]);
        if (!avgRes.ok || !ovRes.ok) throw new Error("API error");
        const avg: Backend = await avgRes.json();
        const ov: Overall = await ovRes.json();

        setOverall(Number(ov.overall_score.toFixed(1)));
        setMetrics([
          { label: "Dining Hall Food", value: avg.avg_diningHall_rating },
          { label: "Dorm Comfort", value: avg.avg_dorm_ratings },
          { label: "Safety", value: avg.avg_safety_ratings },
          { label: "Amenities", value: avg.avg_amenities_rating },
          { label: "Raccoon Sightings", value: avg.avg_racoon_rating },
          { label: "Wi‑Fi Quality", value: avg.avg_wifi_rating },
          { label: "Location", value: avg.avg_location_rating },
        ]);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  // color helper
  const hue = (v: number) =>
    v >= 4
      ? "text-green-600"
      : v >= 3
      ? "text-yellow-500"
      : v > 0
      ? "text-red-500"
      : "text-gray-400";

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* NAV */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-gray-800">
            Rate<span className="text-blue-600">My</span>Dorm
          </Link>
          <Link
            href="/rate"
            className="btn btn-sm btn-primary hidden sm:inline-flex"
          >
            Write a Review
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <header className="bg-gradient-to-r from-sky-600 to-cyan-500 text-white py-10 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight">
          Sixth College
        </h1>
        {overall !== null && (
          <p className="mt-2 text-5xl font-black">{overall}</p>
        )}
      </header>

      {/* Mobile CTA */}
      <div className="sm:hidden bg-white shadow px-6 py-3">
        <Link href="/rate" className="btn btn-primary btn-block">
          Write a Review
        </Link>
      </div>

      {/* SUMMARY GRID */}
      <main className="flex-grow max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-xl font-semibold mb-6">Reviews Summary</h2>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {metrics.map(({ label, value }) => (
            <div
              key={label}
              className="bg-white rounded-lg shadow hover:shadow-md transition p-5 flex flex-col"
            >
              <span className="text-sm text-gray-500 mb-2">{label}</span>
              <span className={`text-3xl font-bold ${hue(value)}`}>
                {value.toFixed(1)}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/" className="link link-primary">
            ← Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
}
