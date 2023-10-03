import React from 'react';
import { TransactionsEl } from '../TransactionsEl/TransactionsEl';
import styles from './Transactions.module.css';

export const Transactions = ({ transactions }) => {
  return (
    <table className={styles.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(transaction => (
          <TransactionsEl key={transaction.id} transactions={transaction} />
        ))}
      </tbody>
    </table>
  );
};
