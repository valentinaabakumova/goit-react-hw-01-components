import PropTypes from 'prop-types';

const Statistics = ({ label, percentage }) => {
  return (
    <li class="item statis-item">
      <span class="label label-stat">{label} </span>
      <span class="percentage">{percentage}%</span>
    </li>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.number.isRequired,
};

export default Statistics;
