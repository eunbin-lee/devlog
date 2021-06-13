import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../modules';
import { getPostThunk } from '../../modules/post';
import theme from '../../styles/theme';
import Loading from '../common/Loading';
import PostContent from './PostContent';
import PostTitle from './PostTitle';
import PostUserInfo from './PostUserInfo';

function Post() {
  const { data, loading, error } = useSelector(
    (state: RootState) => state.post,
  );
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    const postId = Number(router.query.postId);
    dispatch(getPostThunk(postId));
    if (error) {
      console.error(error);
    }
  }, [router]);

  return (
    <>
      {loading && <Loading />}
      {data && (
        <Container>
          <PostTitle post={data} />
          <PostContent post={data} />
          <PostUserInfo post={data} />
        </Container>
      )}
    </>
  );
}

export default Post;

const Container = styled.div`
  width: 768px;
  margin: 0 auto;
  padding: 0 1rem 3rem;

  ${theme.media.medium} {
    width: 100%;
  }
  ${theme.media.small} {
    width: 320px;
  }
`;
