import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import theme from '../../styles/theme';
import { RootState } from '../../modules';
import { getPosts } from '../../modules/posts';
import { DateFormat } from '../../lib/utils';

function HomeLayout() {
  const posts = useSelector((state: RootState) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <PostList>
      {posts.map((post) => {
        const { postImg, postTitle, postSubtitle, createdAt, User } = post;

        return (
          <PostItem>
            <ThumbnailImg src={postImg} />
            <Title>{postTitle}</Title>
            <Subtitle>{postSubtitle}</Subtitle>
            <UserInfo>
              <ProfileImg src={User.userImg} />
              <div>
                <Name>{User.userName}</Name>
                <PostDate>{DateFormat(createdAt)}</PostDate>
              </div>
            </UserInfo>
          </PostItem>
        );
      })}
    </PostList>
  );
}

export default HomeLayout;

const PostList = styled.ul`
  width: 1024px;
  margin: 1rem auto;

  ${theme.media.large} {
    width: 100%;
    padding: 0 1rem;
  }
  ${theme.media.small} {
    width: 320px;
  }
`;
const PostItem = styled.li`
  width: 31.33%;
  height: 25rem;
  float: left;
  margin-right: 3%;
  margin-bottom: 3rem;
  &:nth-child(3n) {
    margin-right: 0;
  }

  ${theme.media.medium} {
    width: 100%;
    height: inherit;
    margin-right: 0;
    margin-bottom: 2rem;
  }
`;
const ThumbnailImg = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border: 1px solid ${theme.palette.gray5};
  box-sizing: border-box;
`;
const Title = styled.h4`
  margin-top: 1.25rem;
  font-size: 1.5rem;
  font-weight: bold;
`;
const Subtitle = styled.p`
  margin-top: 1rem;
  font-size: ${theme.fontSizes.xlarge};
  font-weight: lighter;
  color: ${theme.palette.gray6};
`;
const UserInfo = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  margin-top: 1.75rem;
`;
const ProfileImg = styled.img`
  width: 2.25rem;
  height: 2.25rem;
  margin-right: 0.5rem;
  border-radius: 50%;
`;
const Name = styled.p`
  margin-bottom: 0.65rem;
  font-size: ${theme.fontSizes.small};
  color: ${theme.palette.violet1};
`;
const PostDate = styled.p`
  font-size: ${theme.fontSizes.xsmall};
  color: ${theme.palette.gray6};
`;
