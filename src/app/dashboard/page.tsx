'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function DashboardPage() {
  const router = useRouter();
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  const [feedback, setFeedback] = useState('');

  const handleSectorSelection = (sector: string) => {
    router.push(`/loading?sector=${sector}`);
  };

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Feedback submitted:', feedback);
    setShowFeedbackForm(false);
    setFeedback('');
    alert('Thank you for your feedback!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-500 text-white flex flex-col items-center px-4 py-10 font-sans relative">
      {/* Heading */}
      <h1 className="text-6xl font-extrabold mb-16 text-center animate-fadeIn">
        Explore <span className="text-yellow-300">Sectors</span>
      </h1>

      {/* Stacked Sector Buttons */}
      <div className="flex flex-col w-full max-w-5xl space-y-8 animate-slideUp">
        <button
          onClick={() => handleSectorSelection('education')}
          className="flex items-center justify-between bg-white text-blue-900 font-bold text-2xl py-8 px-12 rounded-lg shadow-2xl hover:scale-105 hover:bg-gray-100 transition-all duration-300"
        >
          🎓 Education Sector
        </button>
        <button
          onClick={() => handleSectorSelection('technology')}
          className="flex items-center justify-between bg-white text-blue-900 font-bold text-2xl py-8 px-12 rounded-lg shadow-2xl hover:scale-105 hover:bg-gray-100 transition-all duration-300"
        >
          💻 Technology Sector
        </button>
        <button
          onClick={() => handleSectorSelection('healthcare')}
          className="flex items-center justify-between bg-white text-blue-900 font-bold text-2xl py-8 px-12 rounded-lg shadow-2xl hover:scale-105 hover:bg-gray-100 transition-all duration-300"
        >
          🩺 Healthcare Sector
        </button>
        <button
          onClick={() => handleSectorSelection('entertainment')}
          className="flex items-center justify-between bg-white text-blue-900 font-bold text-2xl py-8 px-12 rounded-lg shadow-2xl hover:scale-105 hover:bg-gray-100 transition-all duration-300"
        >
          🎭 Entertainment Sector
        </button>
        <button
          onClick={() => handleSectorSelection('retail')}
          className="flex items-center justify-between bg-white text-blue-900 font-bold text-2xl py-8 px-12 rounded-lg shadow-2xl hover:scale-105 hover:bg-gray-100 transition-all duration-300"
        >
          🛍️ Retail Sector
        </button>
      </div>

      {/* Feedback Button */}
      <div className="fixed bottom-6 right-6">
        <button
          onClick={() => setShowFeedbackForm(!showFeedbackForm)}
          className="bg-yellow-300 text-blue-900 px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:bg-yellow-400 transition duration-300 font-semibold"
        >
          📝 Feedback
        </button>
      </div>

      {/* Feedback Form Modal */}
      {showFeedbackForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-80">
            <h2 className="text-xl font-bold mb-4 text-blue-900">We value your feedback!</h2>
            <form onSubmit={handleFeedbackSubmit} className="space-y-4">
              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Type your feedback here..."
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black bg-white"
                required
              />
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setShowFeedbackForm(false)}
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 transition duration-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
