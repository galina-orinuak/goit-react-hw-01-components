import React from 'react';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendsList } from './Friendslist/FriendsList';
import { Transactions } from './Transactions/Transactions';
import userProfile from '../data/user.json';
import newData from '../data/data.json';
import friends from '../data/friends.json';
import newTransitions from '../data/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile user={userProfile} />
      <Statistics title="Upload stats" stats={newData} />
      <FriendsList friends={friends} />
      <Transactions transactions={newTransitions} />
    </div>
  );
};
