import styling from './TransactionHistory.module.css';

import TransactionHistoryItem from '../TransactionHistoryItem/TransactionHistoryItem';

export default function TransactionHistory({ items }) {
  return (
    <table className={styling.tableBox}>
      <thead className={styling.tableHead}>
        <tr className={styling.tableHeadRow}>
          <th className={styling.tableHeadText}>Type</th>
          <th className={styling.tableHeadText}>Amount</th>
          <th className={styling.tableHeadText}>Currency</th>
        </tr>
      </thead>
      <tbody className={styling.tableBody}>
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
