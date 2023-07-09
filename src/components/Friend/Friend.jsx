import PropTypes from 'prop-types';
import { StyledFriends } from './Friend.styled';

const Friends = ({ avatar, name, isOnline }) => {
  return (
    <StyledFriends className={isOnline ? 'item isOn' : 'item isOff'}>
      <span
        className={isOnline ? 'status isOnline' : 'status isOffline'}
      ></span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </StyledFriends>
  );
};

Friends.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
export default Friends;
