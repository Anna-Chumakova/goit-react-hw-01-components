import propTypes from 'prop-types';
const TransactionsHistoryItem = ({ type, amount, currency }) => {
    return (
    <tr>
        <td>{ type}</td>
        <td>{ amount}</td>
        <td>{ currency}</td>
    </tr>
    
    )
}
TransactionsHistoryItem.propTypes = {
    type: propTypes.string.isRequired,
    amount: propTypes.string.isRequired,
    currency: propTypes.string.isRequired,
}
export default TransactionsHistoryItem;