import { createAsyncAction } from 'typesafe-actions';
import { AxiosError } from 'axios';
import { User } from '../../lib/api/user';

export const GET_USERS = 'GET_USERS';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_ERROR = 'GET_USERS_ERROR';

export const GET_USER = 'GET_USER';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_ERROR = 'GET_USER_ERROR';

export const getUsersAsync = createAsyncAction(
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR,
)<undefined, Array<User>, AxiosError>();

export const getUserAsync = createAsyncAction(
  GET_USER,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
)<undefined, User, AxiosError>();
