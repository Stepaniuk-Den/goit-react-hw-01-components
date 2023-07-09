import { StyledCard, StyledProfile, StyledStat } from './Profile.styled';
import PropTypes from 'prop-types';

const Profile = ({ user }) => {
  const {
    username,
    avatar,
    tag,
    location,
    stats: { followers, views, likes },
  } = user;
  return (
    <StyledProfile className="profile">
      <StyledCard className="description">
        <img src={avatar} alt={username} className="avatar" width="200px" />
        <p className="name">{username}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </StyledCard>

      <StyledStat className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{likes}</span>
        </li>
      </StyledStat>
    </StyledProfile>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Profile;
