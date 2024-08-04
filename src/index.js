import React from 'react';
import ReactDOM from 'react-dom/client';
// import { App } from './components/App';
import './index.css';
import data from './data.json';

const root = document.getElementById('root');

const userCard = (
  <div>
    <div>
      <img src={data.avatar} alt="User avatar" />
      <p>{data.username}</p>
      <p>{data.tag}</p>
      <p>{data.location}</p>
    </div>
    <ul>
      <li>
        <span>Followers</span>
        <span>{data.stats.followers}</span>
      </li>
      <li>
        <span>Views</span>
        <span>{data.stats.views}</span>
      </li>
      <li>
        <span>Likes</span>
        <span>{data.stats.likes}</span>
      </li>
    </ul>
  </div>
);
ReactDOM.createRoot(root).render(userCard);
console.log(userCard);

console.log(data);
