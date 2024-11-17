'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function LandingPage() {
  const [displayedText, setDisplayedText] = useState('');

  const fullText =
    'Unlock insights to identify the next big startups and make smarter decisions. Let’s shape the future of innovation together.';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + fullText[index]);
      index++;
      if (index === fullText.length) clearInterval(interval);
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
          Welcome to <span className="text-yellow-300">Startify</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fadeIn">
          {displayedText}
          <span className="animate-blink">|</span>
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
