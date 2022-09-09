import propTypes from 'prop-types';
import TransactionsList from './TransactionList';
import styles from './Transactions.module.css'

const TransactionHistory = ({ items }) => {
    return (
    <>
        <table className={styles.transactionHistory}>
    <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
    </thead>
    
    <TransactionsList items={items} />
    </table>
    </>
    )
}
TransactionHistory.propTypes = {
    items: propTypes.arrayOf(propTypes.exact({id: propTypes.string.isRequired, amount: propTypes.string.isRequired, currency: propTypes.string.isRequired})
    ) 
}
export default TransactionHistory;