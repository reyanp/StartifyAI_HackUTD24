'use client';

import { useState } from 'react';

export default function EducationSectorPage() {
  const [expandedStartup, setExpandedStartup] = useState<number | null>(null);

  const startups = [
    { id: 1, name: 'Startup 1', analysis: 'Analysis for Startup 1', prediction: 85 },
    { id: 2, name: 'Startup 2', analysis: 'Analysis for Startup 2', prediction: 70 },
    { id: 3, name: 'Startup 3', analysis: 'Analysis for Startup 3', prediction: 55 },
    { id: 4, name: 'Startup 4', analysis: 'Analysis for Startup 4', prediction: 62 },
    { id: 5, name: 'Startup 5', analysis: 'Analysis for Startup 5', prediction: 32 },
    { id: 6, name: 'Startup 6', analysis: 'Analysis for Startup 6', prediction: 19 },
    { id: 7, name: 'Startup 7', analysis: 'Analysis for Startup 7', prediction: 58 },
    { id: 8, name: 'Startup 8', analysis: 'Analysis for Startup 8', prediction: 72 },
    { id: 9, name: 'Startup 9', analysis: 'Analysis for Startup 9', prediction: 71 },
    { id: 10, name: 'Startup 10', analysis: 'Analysis for Startup 10', prediction: 97 },
  ];

  // Sort startups by prediction accuracy in descending order
  const sortedStartups = [...startups].sort((a, b) => b.prediction - a.prediction);

  const toggleExpansion = (id: number) => {
    setExpandedStartup(expandedStartup === id ? null : id);
  };

  // Determine the color based on the prediction value
  const getColorForPrediction = (prediction: number) => {
    if (prediction >= 80) return 'bg-green-800';
    if (prediction >= 60) return 'bg-green-500';
    if (prediction >= 40) return 'bg-yellow-500';
    if (prediction >= 20) return 'bg-orange-500';
    return 'bg-red-800';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-500 text-white flex flex-col items-center px-4 py-10">
      {/* Heading */}
      <h1 className="text-4xl font-extrabold mb-10 text-center animate-fadeIn">
        Top 10 <span className="text-yellow-300">Education</span> Startups
      </h1>

      {/* Startups List */}
      <div className="w-full max-w-4xl space-y-6">
        {sortedStartups.map((startup) => (
          <div
            key={startup.id}
            className={`bg-white text-gray-800 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 ${
              expandedStartup === startup.id ? 'shadow-xl' : ''
            }`}
          >
            <div
              className="flex justify-between items-center cursor-pointer text-lg font-semibold"
              onClick={() => toggleExpansion(startup.id)}
            >
              <span>{startup.name}</span>
              <span className="text-blue-500">
                {expandedStartup === startup.id ? '▲' : '▼'}
              </span>
            </div>
            {expandedStartup === startup.id && (
              <div className="mt-4 animate-fadeIn">
                <p className="text-gray-700 mb-4">{startup.analysis}</p>
                <div className="flex items-center justify-center">
                  <div
                    className={`w-20 h-20 rounded-full text-white flex items-center justify-center text-lg font-bold animate-bounce ${
                      getColorForPrediction(startup.prediction)
                    }`}
                  >
                    {startup.prediction}%
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
