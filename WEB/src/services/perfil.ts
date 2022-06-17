import { api } from './api';


export function listarPerfil() {
    return api.get('/post'); 
  }