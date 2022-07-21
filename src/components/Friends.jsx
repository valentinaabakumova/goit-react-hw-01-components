import PropTypes from 'prop-types';

const Friends = ({ avatar, name, isOnline }) => {
  if (isOnline) {
    return (
      <li class="item">
        {/* <span class="status">{isOnline.toString()}</span> */}
        <img class="avatar" src={avatar} alt="User avatar" width="48" />
        <p class="name green">{name}</p>
      </li>
    );
  } else
    return (
      <li class="item">
        {/* <span class="status">{isOnline.toString()}</span> */}
        <img class="avatar" src={avatar} alt="User avatar" width="48" />
        <p class="name red">{name}</p>
      </li>
    );
};

Friends.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default Friends;
