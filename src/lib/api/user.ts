import axios from 'axios';
import BASE_URL from './api';

export async function getUsers() {
  const response = await axios.get<User[]>(`${BASE_URL}/users`);
  return response.data;
}

export async function getUser(userId: number) {
  const response = await axios.get<User>(`${BASE_URL}/users/${userId}`);
  return response.data;
}

export interface User {
  id: number;
  userImg: string;
  userName: string;
  userIntroduction: String;
  liked?: Array<Number>;
}
