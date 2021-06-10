import * as actions from './actions';
import { ActionType } from 'typesafe-actions';
import { User } from '../../lib/api/user';

export type UsersAction = ActionType<typeof actions>;
export type UserAction = ActionType<typeof actions>;

export type UsersState = {
  loading: boolean;
  error: Error | null;
  data: User[] | null;
};

export type UserState = {
  loading: boolean;
  error: Error | null;
  data: User | null;
};
