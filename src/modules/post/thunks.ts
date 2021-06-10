import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';
import { PostAction, PostsAction } from './types';
import { getPost, getPosts } from '../../lib/api/post';
import { getPostAsync, getPostsAsync } from './actions';

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

export function getPostThunk(
  id: number,
): ThunkAction<void, RootState, null, PostAction> {
  return async (dispatch) => {
    const { request, success, failure } = getPostAsync;
    dispatch(request());
    try {
      const post = await getPost(id);
      dispatch(success(post));
    } catch (e) {
      dispatch(failure(e));
    }
  };
}
