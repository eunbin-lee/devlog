import axios from 'axios';
import BASE_URL from './api';

export async function getPosts() {
  const response = await axios.get<Post[]>(`${BASE_URL}/posts`);
  return response.data;
}

export async function getPost(postId: number) {
  const response = await axios.get<Post>(`${BASE_URL}/posts/${postId}`);
  return response.data;
}

export interface Post {
  id: number;
  postImg: string;
  postTitle: string;
  postSubtitle: string;
  postContent: string;
  createdAt: Date;
  likes: number;
  user: {
    id: number;
    userImg: string;
    userName: string;
    userIntroduction: string;
  };
}
