import React, { useEffect } from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../modules';
import { getPostsThunk } from '../../modules/post';
import { Post } from '../../lib/api/post';
import { DateFormat } from '../../lib/utils';
import styled from 'styled-components';
import theme from '../../styles/theme';

interface PostUserInfoProps {
  post: Post;
}

function PostUserInfo({ post }: PostUserInfoProps) {
  const { data, error } = useSelector((state: RootState) => state.posts);
  const dispatch = useDispatch();
  const { user } = post;

  useEffect(() => {
    dispatch(getPostsThunk());
    if (error) {
      console.error(error);
    }
  }, []);
  const recentPosts =
    data && data.filter((post) => post.user.id === user.id).slice(0, 3);

  return (
    <>
      <UserInfo>
        <Link href={`/[username]`} as={`/@${user.userName}`}>
          <ProfileImg src={user.userImg} />
        </Link>
        <div>
          <Link href={`/[username]`} as={`/@${user.userName}`}>
            <Name>{user.userName}</Name>
          </Link>
          <Link href={`/[username]`} as={`/@${user.userName}`}>
            <Introduction>{user.userIntroduction}</Introduction>
          </Link>
        </div>
      </UserInfo>
      {recentPosts && (
        <MorePosts>
          <h4>More From {user.userName}</h4>
          <ul>
            {recentPosts.map((post) => {
              const { id, postTitle, postSubtitle, postImg, createdAt } = post;
              return (
                <RecentPost key={id}>
                  <RecentImg src={postImg} alt={postTitle} />
                  <div>
                    <p>{postTitle}</p>
                    <p>{postSubtitle}</p>
                    <p>{DateFormat(createdAt)}</p>
                  </div>
                </RecentPost>
              );
            })}
          </ul>
        </MorePosts>
      )}
    </>
  );
}

export default PostUserInfo;

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
const MorePosts = styled.div`
  margin-top: 3.5rem;
  h4 {
    margin-bottom: 1.75rem;
    font-size: ${theme.fontSizes.small};
    color: ${theme.palette.gray6};
  }
`;
const RecentPost = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 1.25rem;
  p {
    &:nth-child(1) {
      line-height: 1.5rem;
      font-size: ${theme.fontSizes.large};
    }
    &:nth-child(2) {
      margin-top: 0.375rem;
      margin-bottom: 0.75rem;
      line-height: 1rem;
      font-size: ${theme.fontSizes.small};
      color: ${theme.palette.gray6};
    }
    &:nth-child(3) {
      font-size: ${theme.fontSizes.small};
      color: ${theme.palette.gray6};
    }
  }
`;
const RecentImg = styled.img`
  width: 5rem;
  height: 5rem;
  object-fit: cover;
  margin-right: 1rem;
`;
