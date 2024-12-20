'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function TechnologySectorPage() {
  const router = useRouter();
  const [expandedStartup, setExpandedStartup] = useState<number | null>(null);
  const [showChatBox, setShowChatBox] = useState(false);
  const [chatMessages, setChatMessages] = useState<{ user: string; message: string }[]>([]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const startups = [
    { id: 1, name: 'Nuro', revenue: 1200000000, growth: 25, funding: 2100000000 },
    { id: 2, name: 'Hopin', revenue: 350000000, growth: 20, funding: 1000000000 },
    { id: 3, name: 'Upmetrics', revenue: 50000000, growth: 15, funding: 110000 },
    { id: 4, name: 'MoonPay', revenue: 250000000, growth: 30, funding: 650700000 },
    { id: 5, name: 'Lumanu', revenue: 100000000, growth: 18, funding: 15800000 },
  ];

  const maxRevenue = 1200000000;
  const maxGrowth = 30;
  const maxFunding = 2100000000;

  const calculateScore = (revenue, growth, funding) => {
    const revenueScore = (revenue / maxRevenue) * 40;
    const growthScore = (growth / maxGrowth) * 30;
    const fundingScore = (funding / maxFunding) * 30;

    return Math.round(revenueScore + growthScore + fundingScore);
  };

  const startupsWithScores = startups.map((startup) => ({
    ...startup,
    score: calculateScore(startup.revenue, startup.growth, startup.funding),
  }));

  const sortedStartups = [...startupsWithScores].sort((a, b) => b.score - a.score);

  const toggleExpansion = (id) => {
    setExpandedStartup(expandedStartup === id ? null : id);
  };

  const handleChatSubmit = async () => {
    if (userInput.trim()) {
      setChatMessages((prevMessages) => [
        ...prevMessages,
        { user: 'You', message: userInput },
      ]);
      setIsLoading(true);

      try {
        const response = await fetch('http://localhost:8000/query', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ query: userInput }),
        });

        if (response.ok) {
          const data = await response.json();
          setChatMessages((prevMessages) => [
            ...prevMessages,
            { user: 'AI', message: data.response },
          ]);
        } else {
          console.error('Server Error: ', response.status);
          setChatMessages((prevMessages) => [
            ...prevMessages,
            { user: 'AI', message: 'Sorry, something went wrong!' },
          ]);
        }
      } catch (error) {
        console.error('Network Error: ', error);
        setChatMessages((prevMessages) => [
          ...prevMessages,
          { user: 'AI', message: 'Error connecting to the server.' },
        ]);
      } finally {
        setIsLoading(false);
        setUserInput('');
      }
    }
  };

  const getColorForPrediction = (score) => {
    if (score >= 80) return 'bg-green-800';
    if (score >= 60) return 'bg-green-500';
    if (score >= 40) return 'bg-yellow-500';
    if (score >= 20) return 'bg-orange-500';
    return 'bg-red-800';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-500 text-white flex flex-col items-center px-4 py-10 relative">
      {/* Back Arrow */}
      <div className="absolute top-6 left-6">
        <button
          onClick={() => router.push('/dashboard')}
          className="flex items-center space-x-2 text-blue-300 hover:text-blue-500 transition duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-lg font-semibold">Back</span>
        </button>
      </div>

      {/* Heading */}
      <h1 className="text-4xl font-extrabold mb-10 text-center animate-fadeIn">
        Top 5 <span className="text-yellow-300">Technology</span> Startups
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
              <span className="flex items-center">
                <div
                  className={`w-12 h-12 rounded-full text-white flex items-center justify-center text-lg font-bold mr-4 ${
                    getColorForPrediction(startup.score)
                  }`}
                >
                  {startup.score}%
                </div>
                {startup.name}
              </span>
              <span className="text-blue-500">
                {expandedStartup === startup.id ? '▲' : '▼'}
              </span>
            </div>
            {/* Render Expanded Content */}
            {expandedStartup === startup.id && (
              <div className="mt-4 bg-gray-100 p-4 rounded-md text-gray-800">
                <p><strong>Revenue:</strong> ${startup.revenue.toLocaleString()}</p>
                <p><strong>Growth:</strong> {startup.growth}%</p>
                <p><strong>Funding:</strong> ${startup.funding.toLocaleString()}</p>
                <p>
                  <strong>Analysis:</strong> With a revenue of ${startup.revenue.toLocaleString()}, this startup ranks highly due to its impressive growth rate of {startup.growth}%. Compared to industry benchmarks, it showcases significant potential for scalability and a competitive edge in securing funding (${startup.funding.toLocaleString()} raised so far).
                </p>
                <p>
                  <strong>Future Outlook:</strong> The current trajectory indicates strong market penetration and customer acquisition. Continued investment in innovation and expanding partnerships could further elevate its position as a market leader.
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Chatbox Button */}
      <div className="fixed bottom-6 right-6">
        <button
          onClick={() => setShowChatBox(!showChatBox)}
          className="bg-blue-500 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:bg-blue-600 transition duration-300 font-semibold"
        >
          💬 Chat
        </button>
      </div>

      {/* Chatbox */}
      {showChatBox && (
        <div className="fixed bottom-16 right-6 bg-white w-80 h-96 rounded-lg shadow-lg flex flex-col overflow-hidden">
          <div className="bg-blue-500 text-white p-4 font-semibold flex justify-between">
            <span>AI Assistant</span>
            <button
              onClick={() => setShowChatBox(false)}
              className="text-white hover:text-gray-300 transition duration-300"
            >
              ✖
            </button>
          </div>
          <div className="flex-grow p-4 overflow-y-auto">
            {chatMessages.map((msg, idx) => (
              <div
                key={`msg-${idx}`}
                className={`mb-2 ${msg.user === 'You' ? 'text-right' : 'text-left'} text-black`}
              >
                <span className="font-semibold">{msg.user}: </span>
                <span>{msg.message}</span>
              </div>
            ))}
            {isLoading && <p className="text-gray-500">Typing...</p>}
          </div>
          <div className="p-4 border-t border-gray-300">
            <input
              type="text"
              placeholder="Type your message..."
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black bg-white"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleChatSubmit()}
            />
          </div>
        </div>
      )}
    </div>
  );
}
