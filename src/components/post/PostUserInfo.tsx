import React from 'react';
import { Post } from '../../lib/api/post';
import styled from 'styled-components';
import theme from '../../styles/theme';

interface PostUserInfoProps {
  post: Post;
}

function PostUserInfo({ post }: PostUserInfoProps) {
  const { user } = post;

  return (
    <Wrapper>
      <UserInfo>
        <ProfileImg src={user.userImg} />
        <div>
          <Name>{user.userName}</Name>
          <Introduction>{user.userIntroduction}</Introduction>
        </div>
      </UserInfo>
      <RecentPosts></RecentPosts>
    </Wrapper>
  );
}

export default PostUserInfo;

const Wrapper = styled.div``;
const UserInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const ProfileImg = styled.img`
  width: 5rem;
  height: 5rem;
  margin-right: 1rem;
  border-radius: 50%;
  cursor: pointer;
`;
const Name = styled.p`
  margin-bottom: 1rem;
  font-size: ${theme.fontSizes.large};
  font-weight: bold;
  cursor: pointer;
`;
const Introduction = styled.div`
  color: ${theme.palette.gray6};
`;
const RecentPosts = styled.ul``;
