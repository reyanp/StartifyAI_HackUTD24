'use client';

import Link from 'next/link';
import { FaChalkboardTeacher, FaLaptopCode, FaHeartbeat, FaFilm, FaShoppingCart } from 'react-icons/fa';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-500 text-white flex flex-col items-center px-4 py-10">
      {/* Heading */}
      <h1 className="text-6xl font-extrabold mb-16 text-center animate-heading">
        Sectors
      </h1>

      {/* Stacked Sector Bars */}
      <div className="flex flex-col w-full max-w-5xl space-y-6 flex-grow">
        {/* Education Sector */}
        <Link
          href="/sector/education"
          className="block bg-white text-blue-900 font-semibold py-8 px-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 flex items-center justify-start space-x-4 animate-slideIn"
        >
          <FaChalkboardTeacher className="text-4xl text-blue-600" />
          <span className="text-2xl">Education Sector</span>
        </Link>

        {/* Technology Sector */}
        <Link
          href="/sector/technology"
          className="block bg-white text-blue-900 font-semibold py-8 px-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 flex items-center justify-start space-x-4 animate-slideIn delay-100"
        >
          <FaLaptopCode className="text-4xl text-blue-600" />
          <span className="text-2xl">Technology Sector</span>
        </Link>

        {/* Healthcare Sector */}
        <Link
          href="/sector/healthcare"
          className="block bg-white text-blue-900 font-semibold py-8 px-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 flex items-center justify-start space-x-4 animate-slideIn delay-200"
        >
          <FaHeartbeat className="text-4xl text-blue-600" />
          <span className="text-2xl">Healthcare Sector</span>
        </Link>

        {/* Entertainment Sector */}
        <Link
          href="/sector/entertainment"
          className="block bg-white text-blue-900 font-semibold py-8 px-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 flex items-center justify-start space-x-4 animate-slideIn delay-300"
        >
          <FaFilm className="text-4xl text-blue-600" />
          <span className="text-2xl">Entertainment Sector</span>
        </Link>

        {/* Retail Sector */}
        <Link
          href="/sector/retail"
          className="block bg-white text-blue-900 font-semibold py-8 px-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 flex items-center justify-start space-x-4 animate-slideIn delay-400"
        >
          <FaShoppingCart className="text-4xl text-blue-600" />
          <span className="text-2xl">Retail Sector</span>
        </Link>
      </div>
    </div>
  );
}
