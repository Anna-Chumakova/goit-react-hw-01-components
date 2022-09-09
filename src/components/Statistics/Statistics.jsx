import propTypes from 'prop-types';
import StatisticsItem from './StatisticsItem';


const Statistics = ({ data }) => {
    const elements = data.map(({ id, label, percentage }) => 
    <StatisticsItem key={id} label={label} percentage={percentage} />)
    return (
        <ul className="stat-list">
         {elements}         
        </ul>
        
        
    )          
    
}

export default Statistics;