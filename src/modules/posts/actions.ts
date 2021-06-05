import { createAsyncAction } from 'typesafe-actions';
import { AxiosError } from 'axios';
import { Post } from '../../lib/api/posts';

export const GET_POSTS = 'GET_POSTS';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_POSTS_ERROR = 'GET_POSTS_ERROR';

export const getPostsAsync = createAsyncAction(
  GET_POSTS,
  GET_POSTS_SUCCESS,
  GET_POSTS_ERROR,
)<undefined, Array<Post>, AxiosError>();
