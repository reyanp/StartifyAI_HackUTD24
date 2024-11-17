'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function LandingPage() {
  const [displayedText, setDisplayedText] = useState('');

  const fullText =
    ' EEmpowering Insights, Shaping Futures, and Unlocking the Potential of Tomorrow’s Innovations.';

  useEffect(() => {
    let index = 0;

    // Typing animation logic
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText((prev) => prev + fullText.charAt(index)); // Use charAt to avoid undefined
        index++;
      } else {
        clearInterval(interval); // Stop the interval when all characters are typed
      }
    }, 50); // Typing speed: 50ms per character

    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-500 text-white flex flex-col items-center justify-center px-4">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-700 to-blue-500 opacity-50 animate-pulse"></div>

      {/* Main Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-6xl font-extrabold mb-6 animate-fadeIn">
          Welcome to <span className="text-yellow-300">Stratify</span>
        </h1>

        {/* Typing Animation */}
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 whitespace-pre-line animate-fadeIn">
          {displayedText}
          <span className={displayedText.length < fullText.length ? 'animate-blink' : ''}>|</span>
        </p>

        <div className="space-y-4">
          <Link
            href="/register"
            className="px-8 py-3 bg-yellow-300 text-blue-900 font-semibold text-lg rounded-full shadow-lg hover:bg-yellow-400 transition duration-300 animate-pulseColor"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}
