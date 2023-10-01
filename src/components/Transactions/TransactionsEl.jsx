import React from 'react';
// import styles from './Transactions.module.css'

export const TransactionsEl = ({ transactions }) => {
  return (
    <tr>
      <td>{transactions.type}</td>
      <td>{transactions.amount}</td>
      <td>{transactions.currency}</td>
    </tr>
  );
};
