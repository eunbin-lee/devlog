import { createReducer } from 'typesafe-actions';
import { GET_POSTS, GET_POSTS_ERROR, GET_POSTS_SUCCESS } from './actions';
import { PostsAction, PostsState } from './types';

const initialState: PostsState = {
  loading: false,
  error: null,
  data: null,
};

const posts = createReducer<PostsState, PostsAction>(initialState, {
  [GET_POSTS]: (state) => ({
    ...state,
    loading: true,
    error: null,
    data: null,
  }),
  [GET_POSTS_SUCCESS]: (state, action) => ({
    ...state,
    loading: false,
    error: null,
    data: action.payload,
  }),
  [GET_POSTS_ERROR]: (state, action) => ({
    ...state,
    loading: false,
    error: action.payload,
    data: null,
  }),
});

export default posts;
