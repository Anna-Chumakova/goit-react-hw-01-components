import propTypes from 'prop-types';
import StatisticsItem from './StatisticsItem';
import styles from './Statistics.module.css';

const Statistics = ({ data }) => {
    const elements = data.map(({ id, label, percentage }) => 
    <StatisticsItem key={id} label={label} percentage={percentage} />)
    return (
        <ul className={styles.statList}>
         {elements}         
        </ul>    
    )             
}
Statistics.propTypes = {
    data: propTypes.arrayOf(propTypes.exact({id: propTypes.string.isRequired, label: propTypes.string.isRequired, percentage: propTypes.number.isRequired})
    )
}
export default Statistics;