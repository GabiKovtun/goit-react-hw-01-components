import React from 'react';
import user from './user/user.json';
import { UserProfile } from './user/Profile';
import data from './statistics/data.json';
import { Statistics } from './statistics/statistics';
import friends from './friendList/friends.json';
import { FriendList } from './friendList/friendList';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <UserProfile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
    </div>
  );
};
