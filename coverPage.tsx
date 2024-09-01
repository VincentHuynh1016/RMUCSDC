import Image from "next/image";
import Link from "next/link";
import backgorund from "../../public/UCSD.jpg";

export default function Home() {
  return (
    <main className="overflow-hidden fixed">
      <div
        className="hero min-h-screen bg-cover bg-center w-screen h-screen"
        style={{
          backgroundImage: "url(/UCSD.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-amber-300">
              RATE MY UCSD COLLEGE
            </h1>
            <Link href="/sixthCollege">
              <button className="btn bg-sky-900 text-white">Get Started</button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
