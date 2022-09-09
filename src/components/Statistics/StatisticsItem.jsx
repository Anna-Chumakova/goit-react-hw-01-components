import propTypes from 'prop-types';
import styles from './Statistics.module.css';

const StatisticsItem = ({ label, percentage }) => {
    return (
        <li className="item" >
            <span className={styles.label}>{label}</span>
            <span className={styles.percentage}>{percentage}</span>
        </li>
    )
};
StatisticsItem.propTypes = {
    label: propTypes.string.isRequired,
    percentage: propTypes.number.isRequired
 }
export default StatisticsItem;