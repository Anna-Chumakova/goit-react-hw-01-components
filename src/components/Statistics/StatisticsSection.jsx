import Statistics from "./Statistics";
const StatisticsSection = ({ title, data }) => {
    return (
        <>
            {title && <h1 className='title'>{title}</h1>}
            <Statistics data={data} />
        </>
    )
}
export default StatisticsSection;