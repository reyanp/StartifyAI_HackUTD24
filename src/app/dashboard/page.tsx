// app/dashboard/page.tsx
'use client';

import Link from 'next/link';

export default function DashboardPage() {
  return (
    <div style={styles.container}>
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard!</p>
      <h2>Explore Sectors:</h2>
      <div style={styles.sectors}>
        <Link href="#" style={styles.sectorCard}>
            <h3>Education Sector</h3>
            <p>Discover startups revolutionizing education.</p>
        </Link>
        <Link href="#" style={styles.sectorCard}>
            <h3>Technology Sector</h3>
            <p>Find the next tech unicorn.</p>
        </Link>
        {/* Add more sectors as needed */}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '50px 20px',
  },
  sectors: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    marginTop: '30px',
  },
  sectorCard: {
    flex: '1 1 200px',
    margin: '10px',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    textDecoration: 'none',
    color: '#000',
  },
};
