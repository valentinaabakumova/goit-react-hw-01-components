import Section from './components/Section';
import users from './data/users.json';
import UserList from './components/UserList';
import data from './data/data.json';
import StatisticsList from './components/StatisticsList';
import friends from './data/friends.json';
import FriendsList from './components/FriendsList';
import transaction from './data/transaction.json';
import TransactionList from './components/TransactionList';

export default function App() {
  return (
    <div>
      <Section title="User Profile">
        <UserList items={users} />
      </Section>

      <Section>
        <StatisticsList title="Upload stats" items={data} />
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
