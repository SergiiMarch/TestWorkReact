import React from 'react';
export default function FriendsList({ friends }) {
  return (
    <div>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <div key={id}>
          <img src={avatar} alt={name} />
          <p>Name: {name}</p>
          <p>isOnline: {isOnline ? 'Yes' : 'No'}</p>
        </div>
      ))}
    </div>
  );
}
