import Profile from './Profile/Profile';
import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionsHistory from './TransactionsHistory/TransactionsHistory';

export const App = () => {
  return (
    <>
      <Profile user={user} />
      <Statistics data={data} />
      <FriendList friends={friends} />
      <TransactionsHistory items={transactions} />
    </>
  );
};
