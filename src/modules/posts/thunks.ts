import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';
import { PostsAction } from './types';
import { getPosts } from '../../lib/api/posts';
import { getPostsAsync } from './actions';

export function getPostsThunk(): ThunkAction<
  void,
  RootState,
  null,
  PostsAction
> {
  return async (dispatch) => {
    const { request, success, failure } = getPostsAsync;
    dispatch(request());
    try {
      const posts = await getPosts();
      dispatch(success(posts));
    } catch (e) {
      dispatch(failure(e));
    }
  };
}
