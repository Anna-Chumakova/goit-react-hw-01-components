import Statistics from "./Statistics";
import propTypes from "prop-types";
import styles from './Statistics.module.css'; 

const StatisticsSection = ({ title, data }) => {
    return (
        <div className={styles.conteiner}>
            {title && <h1 className={styles.title}>{title}</h1>}
            <Statistics data={data} />
        </div>
    )
}
StatisticsSection.propTypes = {
    title: propTypes.string,
    data: propTypes.arrayOf(propTypes.exact({id: propTypes.string.isRequired, label: propTypes.string.isRequired, percentage: propTypes.number.isRequired})
    )
}
export default StatisticsSection;