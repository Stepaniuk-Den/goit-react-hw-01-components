import Friends from 'components/Friend/Friend';
import PropTypes from 'prop-types';
import { StyledFriendList } from './FriendList.styled';

const FriendList = ({ friends }) => {
  return (
    <StyledFriendList className="friend-list">
      {friends.map(friend => {
        return (
          <Friends
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        );
      })}
    </StyledFriendList>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }).isRequired
  ),
};

export default FriendList;
