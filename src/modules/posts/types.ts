import * as actions from './actions';
import { ActionType } from 'typesafe-actions';
import { Post } from '../../lib/api/posts';

export type PostsAction = ActionType<typeof actions>;

export type PostsState = {
  loading: boolean;
  error: Error | null;
  data: Post[] | null;
};
