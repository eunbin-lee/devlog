import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type PostsAction = ActionType<typeof actions>;

export type Post = {
  id: number;
  postImg: string;
  postTitle: string;
  postSubtitle: string;
  postContent: string;
  createdAt: Date;
  likes: number;
  User: {
    id: number;
    userImg: string;
    userName: string;
    userIntroduction: string;
  };
};

export type PostsState = Post[];
