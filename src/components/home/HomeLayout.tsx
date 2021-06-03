import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../modules';
import { getPosts } from '../../modules/posts';

function HomeLayout() {
  const posts = useSelector((state: RootState) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  console.log(posts);

  return <div>Devlog Home</div>;
}

export default HomeLayout;
