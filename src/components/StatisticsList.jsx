import Statistics from './Statistics';
import PropTypes from 'prop-types';

function StatisticsList({ title, items }) {
  return (
    <div class="statistics">
      {title && <h2 class="title">{title}</h2>}
      <ul class="list list-stat">
        {items?.map(item => (
          <Statistics label={item.label} percentage={item.percentage} />
        ))}
      </ul>
    </div>
  );
}

StatisticsList.propTypes = {
  title: PropTypes.string.isRequired,
  item: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

export default StatisticsList;
