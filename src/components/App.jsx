import React from 'react';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendsList } from './Friendslist/FriendsList';
import userProfile from './Data/user.json';
import newData from './Data/data.json';
import friends from './Data/friends.json';
import newTransitions from './Data/transactions.json';
import { Transactions } from './Transactions/Transactions';

export const App = ({ data }) => {
  return <Profile user={userProfile} />;
};

export const AppStat = ({ data }) => {
  return <Statistics stats={newData} />;
};

export const AppFriends =({data}) => {
  return <FriendsList friends = {friends}/>
  }

  export const AppTrans =({data}) => {
    return <Transactions transactions = {newTransitions}/>
    }
// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
