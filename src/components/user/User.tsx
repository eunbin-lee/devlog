import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import theme from '../../styles/theme';
import { Post } from '../../lib/api/post';
import { RootState } from '../../modules';
import { getPostsThunk } from '../../modules/post';
import Loading from '../common/Loading';
import UserPost from './UserPost';
import UserProfile from './UserProfile';
import { User } from '../../lib/api/user';

function UserLayout() {
  const { data, loading, error } = useSelector(
    (state: RootState) => state.posts,
  );
  const dispatch = useDispatch();
  const router = useRouter();
  const [userPosts, setUserPosts] = useState<Array<Post>>([]);
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const USERNAME = router.query.username;
    dispatch(getPostsThunk());
    if (data) {
      const USER_POSTS = data.filter(
        (post) => post.user.userName === USERNAME.slice(1),
      );
      setUserPosts(USER_POSTS);
      setUser(USER_POSTS[0].user);
    }
    if (error) {
      console.error(error);
    }
  }, [router]);

  const onClickPost = (id: number) => {
    router.push(`/post/${id}`);
  };

  return (
    <>
      {loading && <Loading />}
      {data && (
        <Container>
          <PostList>
            {userPosts.map((post) => (
              <UserPost key={post.id} post={post} onClickPost={onClickPost} />
            ))}
          </PostList>
          {user && <UserProfile user={user} />}
        </Container>
      )}
    </>
  );
}

export default UserLayout;

const Container = styled.div`
  width: 768px;
  margin: 0 auto;
  padding: 0 1rem 3rem;

  ${theme.media.medium} {
    width: 100%;
  }
  ${theme.media.xsmall} {
    width: 320px;
  }
`;
const PostList = styled.ul`
  margin: 2.5rem 0;
`;
