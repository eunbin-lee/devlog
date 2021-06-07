import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import theme from '../../styles/theme';
import Loading from '../common/Loading';
import { RootState } from '../../modules';
import { getPostsThunk } from '../../modules/posts';
import { DateFormat } from '../../lib/utils';

function HomeLayout() {
  const { data, loading, error } = useSelector(
    (state: RootState) => state.posts,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostsThunk());
    if (error) {
      console.error(error);
    }
  }, []);

  return (
    <PostList>
      {loading && <Loading />}
      {data &&
        data.map((post) => {
          const {
            id,
            postImg,
            postTitle,
            postSubtitle,
            createdAt,
            userName,
            userImg,
          } = post;

          return (
            <PostItem key={id}>
              <ThumbnailImg src={postImg} />
              <Title>{postTitle}</Title>
              <Subtitle>{postSubtitle}</Subtitle>
              <UserInfo>
                <ProfileImg src={userImg} />
                <div>
                  <Name>{userName}</Name>
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
  overflow: hidden;
  margin-top: 1.25rem;
  font-size: 1.5rem;
  font-weight: bold;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const Subtitle = styled.p`
  overflow: hidden;
  display: -webkit-box;
  margin-top: 1rem;
  line-height: 1.5rem;
  font-size: ${theme.fontSizes.xlarge};
  font-weight: lighter;
  color: ${theme.palette.gray6};
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  word-break: break-all;
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
