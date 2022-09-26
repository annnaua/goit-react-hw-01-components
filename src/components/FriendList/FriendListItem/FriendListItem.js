import PropTypes from 'prop-types';

import {
  FriendItem,
  FriendTitle,
  FriendImage,
  FriendStatus,
} from './FriendListItem.styled';

export const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <FriendItem>
      <FriendStatus selected={isOnline}></FriendStatus>
      <FriendImage src={avatar} alt="User avatar" width="48" />
      <FriendTitle>{name}</FriendTitle>
    </FriendItem>
  );
};

FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
