import { createReducer } from 'typesafe-actions';
import { GET_POSTS } from './actions';
import { PostsAction, PostsState } from './types';
import * as faker from 'faker';

const initialState: PostsState = [];

for (let i = 0; i < 100; i++) {
  initialState.push({
    id: faker.random.number(),
    postImg: faker.image.imageUrl(),
    postTitle: faker.name.title(),
    postSubtitle: faker.lorem.sentence(),
    postContent: faker.lorem.paragraph(),
    createdAt: faker.date.recent(),
    likes: faker.random.number(),
    User: {
      id: faker.random.number(),
      userImg: faker.image.avatar(),
      userName: faker.name.findName(),
      userIntroduction: faker.lorem.paragraph(),
    },
  });
}

const posts = createReducer<PostsState, PostsAction>(initialState, {
  [GET_POSTS]: (state, action) => state,
});

export default posts;
