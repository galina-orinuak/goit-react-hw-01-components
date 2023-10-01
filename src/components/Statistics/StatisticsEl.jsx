import React from 'react';
import styles from './Statistics.module.css';

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

export const StatisticsEl = ({ stats }) => {
  return (
    <div style={{ backgroundColor: getRandomColor() }} className={styles.item}>
      <span className={styles.label}>{stats.label}</span>
      <span className={styles.percentage}>{stats.percentage}%</span>
    </div>
  );
};
