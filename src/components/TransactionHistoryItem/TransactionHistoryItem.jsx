import styling from './TransactionHistoryItem.module.css';

export default function TransactionHistoryItem({ type, amount, currency }) {
  return (
    <tr className={styling.tableRow}>
      <td className={styling.transactionType}>{type}</td>
      <td className={styling.transactionAmount}>{amount}</td>
      <td className={styling.transactionCuttency}>{currency}</td>
    </tr>
  );
}
