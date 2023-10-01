import React from 'react';
import styles from './FriendsList.module.css';
import { clsx } from 'clsx';

export const FriendsListEl = ({ friends }) => {
  return (
    <li className={styles.item}>
      <span
        // style={{backgroundColor: friends.isOnline = true ? styles.green : styles.red}}
        className={clsx(
          styles.status,
          friends.isOnline === true ? styles.green : styles.red
        )}
      />

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
