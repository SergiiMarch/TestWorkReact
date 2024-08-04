import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import './index.css';
import data from './data.json';

const divElCreate = React.createElement('div', { data });
const root = document.getElementById('root');

const userCard = (
  <div>
    <div>
      <img
        src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
        alt="User avatar"
      />
      <p>Petra Marica</p>
      <p>@pmarica</p>
      <p>Salvador, Brasil</p>
    </div>
    <ul>
      <li>
        <span>Followers</span>
        <span>1000</span>
      </li>
      <li>
        <span>Views</span>
        <span>2000</span>
      </li>
      <li>
        <span>Likes</span>
        <span>3000</span>
      </li>
    </ul>
  </div>
);
ReactDOM.createRoot(root).render(userCard);
console.log(divElCreate);
// const userData = {
//   username: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: 'Ocho Rios, Jamaica',
//   avatar: 'https://cdn-icons-png.flaticon.com/512/2922/2922506.png',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const App = () => {
//   return (
//     <>
//            {data}
//       <Profile
//         name={data.username}
//         tag={data.tag}
//         location={data.location}
//         image={data.avatar}
//         stats={data.stats}
//       />
//          {' '}
//     </>
//   );
// };
