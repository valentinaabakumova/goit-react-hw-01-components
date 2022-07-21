import Section from './components/Section';
import users from './users.json';
import UserList from './components/UserList';
import data from './data.json';
import StatisticsList from './components/StatisticsList';
import friends from './friends.json';
import FriendsList from './components/FriendsList';
import transaction from './transaction.json';
import TransactionList from './components/TransactionList';

export default function App() {
  return (
    <div>
      <Section title="User Profile">
        <UserList items={users} />
      </Section>

      <Section title="Statictics">
        <StatisticsList items={data} />
      </Section>

      <Section title="Friends">
        <FriendsList items={friends} />
      </Section>

      <Section title="Transaction">
        <TransactionList items={transaction} />
      </Section>
    </div>
  );
}
