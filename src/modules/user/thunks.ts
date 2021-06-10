import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';
import { UserAction, UsersAction } from './types';
import { getUser, getUsers } from '../../lib/api/user';
import { getUserAsync, getUsersAsync } from './actions';

export function getUsersThunk(): ThunkAction<
  void,
  RootState,
  null,
  UsersAction
> {
  return async (dispatch) => {
    const { request, success, failure } = getUsersAsync;
    dispatch(request());
    try {
      const posts = await getUsers();
      dispatch(success(posts));
    } catch (e) {
      dispatch(failure(e));
    }
  };
}

export function getUserThunk(
  id: number,
): ThunkAction<void, RootState, null, UserAction> {
  return async (dispatch) => {
    const { request, success, failure } = getUserAsync;
    dispatch(request());
    try {
      const post = await getUser(id);
      dispatch(success(post));
    } catch (e) {
      dispatch(failure(e));
    }
  };
}
