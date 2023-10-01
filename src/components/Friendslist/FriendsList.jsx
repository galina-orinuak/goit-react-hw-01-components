import React from 'react';
import { FriendsListEl } from './FriendsListEl';
import styles from './FriendsList.module.css';

export const FriendsList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map(friend => (
        <FriendsListEl key={friend.id} friends={friend} />
      ))}
    </ul>
  );
};
