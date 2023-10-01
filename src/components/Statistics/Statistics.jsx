import React from 'react';
import { StatisticsEl } from './StatisticsEl';
import styles from './Statistics.module.css';

export const Statistics = ({ stats }) => {
  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>UPLOAD STATS</h2>
      <div className={styles.statList}>
        {stats.map(stats => (
          <StatisticsEl key={stats.id} stats={stats} />
        ))}
      </div>
    </section>
  );
};
