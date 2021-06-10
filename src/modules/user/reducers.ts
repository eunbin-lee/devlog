import { createReducer } from 'typesafe-actions';
import {
  GET_USERS,
  GET_USERS_ERROR,
  GET_USERS_SUCCESS,
  GET_USER,
  GET_USER_ERROR,
  GET_USER_SUCCESS,
} from './actions';
import { UserAction, UsersAction, UsersState, UserState } from './types';

const initialUsersState: UsersState = {
  loading: false,
  error: null,
  data: null,
};

export const users = createReducer<UsersState, UsersAction>(initialUsersState, {
  [GET_USERS]: (state) => ({
    ...state,
    loading: true,
    error: null,
    data: null,
  }),
  [GET_USERS_SUCCESS]: (state, action) => ({
    ...state,
    loading: false,
    error: null,
    data: action.payload,
  }),
  [GET_USERS_ERROR]: (state, action) => ({
    ...state,
    loading: false,
    error: action.payload,
    data: null,
  }),
});

const initialUserState: UserState = {
  loading: false,
  error: null,
  data: null,
};

export const user = createReducer<UserState, UserAction>(initialUserState, {
  [GET_USER]: (state) => ({
    ...state,
    loading: true,
    error: null,
    data: null,
  }),
  [GET_USER_SUCCESS]: (state, action) => ({
    ...state,
    loading: false,
    error: null,
    data: action.payload,
  }),
  [GET_USER_ERROR]: (state, action) => ({
    ...state,
    loading: false,
    error: action.payload,
    data: null,
  }),
});
