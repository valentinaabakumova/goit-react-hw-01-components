import User from './User';
import PropTypes from 'prop-types';

function UserList({ items }) {
  console.log(items);
  return (
    <div>
      <h2 class="title"> Friends</h2>
      <ul class="list">
        {items?.map(item => (
          <li class="item" key={item.id}>
            <User
              username={item.username}
              tag={item.tag}
              location={item.location}
              avatar={item.avatar}
              followers={item.stats.followers}
              views={item.stats.views}
              likes={item.stats.likes}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

UserList.propTypes = {
  item: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

export default UserList;
