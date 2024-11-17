'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function LoadingScreen() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Get the selected sector from query parameters
  const sector = searchParams.get('sector') || 'education';

  useEffect(() => {
    // Redirect to the sector page after 7 seconds
    const timer = setTimeout(() => {
      router.push(`/sector/${sector}`);
    }, 3500);

    return () => clearTimeout(timer); // Clear the timeout on unmount
  }, [router, sector]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-500 text-white flex flex-col items-center justify-center">
      <div className="text-center">
        {/* Loading Animation */}
        <div className="flex items-center justify-center mb-8 animate-spinSlow">
          <div className="w-20 h-20 border-4 border-yellow-300 border-t-transparent rounded-full"></div>
        </div>
        <h1 className="text-3xl font-extrabold">Loading...</h1>
        <p className="mt-4 text-lg">Preparing insights for the {sector} sector</p>
      </div>
    </div>
  );
}
