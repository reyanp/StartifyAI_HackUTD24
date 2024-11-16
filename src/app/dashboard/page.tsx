// app/dashboard/page.tsx
'use client';

import Link from 'next/link';
import styles from './page.module.css';

export default function DashboardPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Sectors</h1>
      <div className={styles.sectorList}>
        <Link href="/sector/education" className={styles.sectorCard}>
          <span>Education Sector</span>
        </Link>
        <Link href="/sector/technology" className={styles.sectorCard}>
          <span>Technology Sector</span>
        </Link>
        {/* Add more sectors as needed */}
      </div>
    </div>
  );
}
