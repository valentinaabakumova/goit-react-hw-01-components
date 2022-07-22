import Friends from './Friends';
import PropTypes from 'prop-types';

function FriendsList({ items }) {
  return (
    <div class="friends">
      <h2 class="title">Friends</h2>
      <ul class="list">
        {items?.map(item => (
          <Friends
            avatar={item.avatar}
            name={item.name}
            isOnline={item.isOnline}
          />
        ))}
      </ul>
    </div>
  );
}

FriendsList.propTypes = {
  item: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

export default FriendsList;
