import React from 'react';
import styles from './FriendsListEl.module.css';
import { clsx } from 'clsx';

export const FriendsListEl = ({ friends }) => {
  return (
    <li className={styles.item}>
      <span
        className={clsx (styles.status, {[styles.isOnline]: friends.isOnline})}/>

      <img
        className={styles.avatar}
        src={friends.avatar}
        alt="User avatar"
        width="48"
      />
      <p className={styles.name}>{friends.name}</p>
    </li>
  );
};
