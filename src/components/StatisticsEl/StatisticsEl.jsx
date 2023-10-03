import React from 'react';
import styles from './StatisticsEl.module.css';
import { getRandomColor } from 'helpers/functions';


export const StatisticsEl = ({ stats }) => {
  return (
    <div style={{ backgroundColor: getRandomColor() }} className={styles.item}>
      <span className={styles.label}>{stats.label}</span>
      <span className={styles.percentage}>{stats.percentage}%</span>
    </div>
  );
};
