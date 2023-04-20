import React from 'react';
import user from 'data/user.json';
import { Profile } from './Profile/Profile';
import data from 'data/data.json';
import { Statistics } from './Statistics/statistics';
import friends from 'data/friends.json';
import { FriendList } from './friendList/friendList';
import transactions from 'data/transactions.json';
import { TransactionHistory } from './transactions/transactionsHistory';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </div>
  );
};
