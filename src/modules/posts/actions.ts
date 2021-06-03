import { createAction } from 'typesafe-actions';

export const GET_POSTS = 'GET_POSTS';

export const getPosts = createAction(GET_POSTS)();
