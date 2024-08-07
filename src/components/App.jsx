import Profile from './Profile';
import data from '../data.json';
import friends from '../friends.json';
import FriendsList from './FriendList/FriendList';
import transactions from '../transactions.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';

export default function App() {
  return (
    <div>
      <Profile data={data} />
      <FriendsList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
}
