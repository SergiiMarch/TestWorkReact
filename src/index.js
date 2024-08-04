import React from 'react';
import ReactDOM from 'react-dom/client';
// import { App } from './components/App';
import './index.css';
import data from './data.json';

const root = document.getElementById('root');

const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <div>
      <div>
        <img src={avatar} alt="User avatar" />
        <p>{username}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>
      <ul>
        <li>
          <span>Followers</span>
          <span>{followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
};
ReactDOM.createRoot(root).render(
  <Profile
    username={data.username}
    tag={data.tag}
    location={data.location}
    avatar={data.avatar}
    stats={data.stats}
  />
);

console.log(root);
