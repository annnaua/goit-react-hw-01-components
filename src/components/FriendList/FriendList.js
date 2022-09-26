import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem/FriendListItem';

import { FriendWrapper } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendWrapper>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <FriendListItem
          key={id}
          isOnline={isOnline}
          avatar={avatar}
          name={name}
        />
      ))}
    </FriendWrapper>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
