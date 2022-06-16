import { api } from './api';

export interface PostPayload {
  content: string;
  user_idUser: number;
}

export function listarFeeds() {
  return api.get('/post'); 
}

export function PublicarPost(payload: PostPayload) {
  return api.post('/post', payload);
}
