import Statistics from './Statistics';
import PropTypes from 'prop-types';

function StatisticsList({ items }) {
  console.log(items);
  return (
    <div class="statistics">
      <h2 class="title">Statistics</h2>
      <ul class="list">
        {items?.map(item => (
          <Statistics label={item.label} percentage={item.percentage} />
        ))}
      </ul>
    </div>
  );
}

StatisticsList.propTypes = {
  item: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

export default StatisticsList;
