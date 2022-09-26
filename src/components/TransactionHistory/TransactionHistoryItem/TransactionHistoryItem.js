import PropTypes from 'prop-types';

import { TransactionItem } from './TransactionHistoryItem.styled';

export const TransactionHistoryItem = ({ type, amount, currency }) => {
  return (
    <TransactionItem>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </TransactionItem>
  );
};

TransactionHistoryItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
