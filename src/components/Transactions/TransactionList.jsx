import propTypes from 'prop-types';
import TransactionsHistoryItem from './TransactionHistoryItem';
const TransactionsList = ({ items }) => {
    const elements = items.map(({ id, type, amount, currency }) =>
        <TransactionsHistoryItem key={id} type={type} amount={amount} currency={currency} />)
    return (
        <tbody>{ elements}</tbody>
    )
}
TransactionsList.propTypes = {
    items: propTypes.arrayOf(propTypes.exact({id: propTypes.string.isRequired, amount: propTypes.string.isRequired, currency: propTypes.string.isRequired})
    )
}
export default TransactionsList;