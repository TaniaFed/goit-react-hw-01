// import transactions from '../transactions.json'

import TransactionHistoryItem from '../TransactionHistoryItem/TransactionHistoryItem';

export default function TransactionHistory({ items }) {
  return (
    <table>
      <thead>
        <tr className="tableHeader">
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <TransactionHistoryItem
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        ))}
      </tbody>
    </table>
  );
}
