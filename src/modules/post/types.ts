import * as actions from './actions';
import { ActionType } from 'typesafe-actions';
import { Post } from '../../lib/api/post';

export type PostsAction = ActionType<typeof actions>;
export type PostAction = ActionType<typeof actions>;

export type PostsState = {
  loading: boolean;
  error: Error | null;
  data: Post[] | null;
};

export type PostState = {
  loading: boolean;
  error: Error | null;
  data: Post | null;
};
