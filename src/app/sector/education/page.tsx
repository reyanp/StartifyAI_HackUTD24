// app/sector/education/page.tsx
'use client';

import { useState } from 'react';
import styles from './page.module.css';

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

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Top 10 Education Startups</h1>
      <div className={styles.startupList}>
        {sortedStartups.map((startup) => (
          <div key={startup.id} className={styles.startupCard}>
            <div
              className={styles.startupHeader}
              onClick={() => toggleExpansion(startup.id)}
            >
              <span>{startup.name}</span>
              <span className={styles.expandIcon}>
                {expandedStartup === startup.id ? '▲' : '▼'}
              </span>
            </div>
            {expandedStartup === startup.id && (
              <div className={styles.startupContent}>
                <p>{startup.analysis}</p>
                <div className={styles.predictionCircle}>
                  {startup.prediction}%
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
