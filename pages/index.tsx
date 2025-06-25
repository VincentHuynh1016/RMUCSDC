// pages/index.tsx
import React, { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Background image with error handling */}
      {!imageError ? (
        <img
          src="/ucsd.webp"
          alt="UCSD Campus"
          className="absolute inset-0 w-full h-full object-cover"
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900 to-cyan-700"></div>
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60" />

      {/* Content - same as above */}
      <div className="relative z-10 flex flex-col items-center justify-start h-full w-full text-center px-4 pt-12">
        <div className="bg-black/30 backdrop-blur-sm p-8 rounded-2xl shadow-2xl max-w-md">
          <h1 className="mb-6 text-4xl md:text-5xl font-bold text-amber-300 drop-shadow-lg">
            RATE MY UCSD COLLEGE
          </h1>

          <div className="mt-8">
            <Link href="/sixthCollege">
              <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white text-lg font-semibold rounded-lg transition-all transform hover:scale-105 shadow-lg w-full outline-none ring-0">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
