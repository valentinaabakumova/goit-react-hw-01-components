import PropTypes from 'prop-types';

const User = ({ username, tag, location, avatar, followers, views, likes }) => {
  return (
    <div className="profile">
      <div className="description">
        <div class="img-prof">
          <img src={avatar} alt="User avatar" className="avatar" />
        </div>
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
        <ul className="stats list">
          <li class="stats-item">
            <span className="label">Followers </span>
            <span className="quantity">{followers}</span>
          </li>
          <li class="stats-item">
            <span className="label">Views </span>
            <span className="quantity">{views}</span>
          </li>
          <li class="stats-item">
            <span className="label">Likes </span>
            <span className="quantity">{likes}</span>
          </li>
        </ul>{' '}
      </div>
    </div>
  );
};

User.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

export default User;
