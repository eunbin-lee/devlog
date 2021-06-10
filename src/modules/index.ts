import { combineReducers } from 'redux';
import { posts, post } from './post';
import { users, user } from './user';

const rootReducer = combineReducers({ posts, post, users, user });

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
