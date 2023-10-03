import React from 'react';
import { StatisticsEl } from '../StatisticsEl/StatisticsEl.jsx';
import styles from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <div className={styles.statList}>
        {stats.map(stats => (
          <StatisticsEl key={stats.id} stats={stats} />
        ))}
      </div>
    </section>
  );
};
