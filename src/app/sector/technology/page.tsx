// app/sector/technology/page.tsx
'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function TechnologySectorPage() {
  const [expandedStartup, setExpandedStartup] = useState<number | null>(null);

  const startups = [
    { id: 1, name: 'Startup A', analysis: 'Analysis for Startup A', prediction: 75 },
    { id: 2, name: 'Startup B', analysis: 'Analysis for Startup B', prediction: 80 },
    { id: 3, name: 'Startup C', analysis: 'Analysis for Startup C', prediction: 65 },
  ];

  // Sort startups by prediction accuracy in descending order
  const sortedStartups = [...startups].sort((a, b) => b.prediction - a.prediction);

  const toggleExpansion = (id: number) => {
    setExpandedStartup(expandedStartup === id ? null : id);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Top 3 Technology Startups</h1>
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
