import React from 'react';
import { Post } from '../../lib/api/post';
import { DateFormat } from '../../lib/utils';
import styled from 'styled-components';
import theme from '../../styles/theme';

interface PostTitleProps {
  post: Post;
}

function PostTitle({ post }: PostTitleProps) {
  const { postTitle, postSubtitle, createdAt, user } = post;

  return (
    <Wrapper>
      <Title>{postTitle}</Title>
      <Subtitle>{postSubtitle}</Subtitle>
      <UserInfo>
        <ProfileImg src={user.userImg} />
        <div>
          <Name>{user.userName}</Name>
          <PostDate>{DateFormat(createdAt)}</PostDate>
        </div>
      </UserInfo>
    </Wrapper>
  );
}

export default PostTitle;

const Wrapper = styled.div`
  margin-top: 4rem;
`;
const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: lighter;
`;
const Subtitle = styled.h3`
  margin-top: 1.25rem;
  font-size: ${theme.fontSizes.xlarge};
  font-weight: lighter;
  color: ${theme.palette.gray6};
`;
const UserInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 1.5rem;
`;
const ProfileImg = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  margin-right: 0.5rem;
  border-radius: 50%;
  cursor: pointer;
`;
const Name = styled.p`
  margin-bottom: 0.5rem;
  font-size: ${theme.fontSizes.small};
  cursor: pointer;
`;
const PostDate = styled.p`
  font-size: ${theme.fontSizes.xsmall};
  color: ${theme.palette.gray6};
`;
