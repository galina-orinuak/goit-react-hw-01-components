import React from 'react';

export const TransactionsEl = ({ transactions }) => {
  return (
    <tr>
      <td>{transactions.type}</td>
      <td>{transactions.amount}</td>
      <td>{transactions.currency}</td>
    </tr>
  );
};
