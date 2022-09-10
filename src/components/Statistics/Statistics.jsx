import propTypes from 'prop-types';
import StatisticsItem from './StatisticsItem';
import styles from './Statistics.module.css';

const Statistics = ({ data }) => {

    return (
        <ul className={styles.statList}>
         {data.map(({ id, label, percentage }) => 
        <StatisticsItem key={id} label={label} percentage={percentage} />)}         
        </ul>    
    )             
}
Statistics.propTypes = {
    data: propTypes.arrayOf(propTypes.exact({id: propTypes.string.isRequired, label: propTypes.string.isRequired, percentage: propTypes.number.isRequired})
    )
}
export default Statistics;