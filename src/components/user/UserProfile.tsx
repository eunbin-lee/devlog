import React from 'react';
import { User } from '../../lib/api/user';
import styled from 'styled-components';
import theme from '../../styles/theme';

interface UserProfileProps {
  user: User;
}

function UserProfile({ user }: UserProfileProps) {
  const { userImg, userName, userIntroduction } = user;

  return (
    <UserInfo>
      <ProfileImg src={userImg} alt={`${userName}'s profile image`} />
      <Name>{userName}</Name>
      <Introduction>{userIntroduction}</Introduction>
    </UserInfo>
  );
}

export default UserProfile;

const UserInfo = styled.div`
  position: fixed;
  top: 9rem;
  left: calc(50% - 600px);
  width: 11rem;

  ${theme.media.xlarge} {
    display: none;
  }
`;
const ProfileImg = styled.img`
  width: 8.5rem;
  height: 8.5rem;
  object-fit: cover;
`;
const Name = styled.p`
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  font-weight: bold;
`;
const Introduction = styled.div`
  line-height: 1.25rem;
  color: ${theme.palette.gray6};
`;
