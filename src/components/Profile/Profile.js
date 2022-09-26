import PropTypes from 'prop-types';

import {
  ProfileCard,
  StastList,
  StastItem,
  Description,
  Avatar,
  DescriptionTitle,
  DescriptionText,
  StatsTitle,
  StatsText,
} from './Profile.styled';

export const Profile = ({
  user: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) => {
  return (
    <ProfileCard>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <DescriptionTitle>{username}</DescriptionTitle>
        <DescriptionText>@{tag}</DescriptionText>
        <DescriptionText>{location}</DescriptionText>
      </Description>

      <StastList>
        <StastItem>
          <StatsTitle>Followers</StatsTitle>
          <StatsText>{followers}</StatsText>
        </StastItem>
        <StastItem>
          <StatsTitle>Views</StatsTitle>
          <StatsText>{views}</StatsText>
        </StastItem>
        <StastItem>
          <StatsTitle>Likes</StatsTitle>
          <StatsText>{likes}</StatsText>
        </StastItem>
      </StastList>
    </ProfileCard>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }),
};
