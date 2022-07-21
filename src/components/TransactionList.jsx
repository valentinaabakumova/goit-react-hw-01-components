import Transaction from './Transaction';
import PropTypes from 'prop-types';

function TransactionList({ items }) {
  console.log(items);
  return (
    <div>
      <h2 class="title">Transaction</h2>
      <table class="transaction-history">
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody class="tBody">
          {items?.map(item => (
            <Transaction
              type={item.type}
              amount={item.amount}
              currency={item.currency}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

Transaction.propTypes = {
  item: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionList;
