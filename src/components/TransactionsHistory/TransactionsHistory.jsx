import Transactions from 'components/Transactions/Transactions';
import PropTypes from 'prop-types';
import { StyledHistory } from './TransactionsHistory.styled';

const TransactionsHistory = ({ items }) => {
  return (
    <StyledHistory className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <Transactions
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        ))}
      </tbody>
    </StyledHistory>
  );
};

TransactionsHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionsHistory;
