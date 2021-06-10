import { createReducer } from 'typesafe-actions';
import {
  GET_POST,
  GET_POSTS,
  GET_POSTS_ERROR,
  GET_POSTS_SUCCESS,
  GET_POST_ERROR,
  GET_POST_SUCCESS,
} from './actions';
import { PostAction, PostsAction, PostsState, PostState } from './types';

const initialPostsState: PostsState = {
  loading: false,
  error: null,
  data: null,
};

export const posts = createReducer<PostsState, PostsAction>(initialPostsState, {
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

const initialPostState: PostState = {
  loading: false,
  error: null,
  data: null,
};

export const post = createReducer<PostState, PostAction>(initialPostState, {
  [GET_POST]: (state) => ({
    ...state,
    loading: true,
    error: null,
    data: null,
  }),
  [GET_POST_SUCCESS]: (state, action) => ({
    ...state,
    loading: false,
    error: null,
    data: action.payload,
  }),
  [GET_POST_ERROR]: (state, action) => ({
    ...state,
    loading: false,
    error: action.payload,
    data: null,
  }),
});
