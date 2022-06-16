import express from 'express';
import PostController from '../domain/Posts/controllers/postController';
import { PostValidation } from '../domain/Posts/validations';

const routes = express.Router();

routes.get('/post', PostController.getAllPosts);
routes.get('/post/:id', PostValidation.getOne, PostController.getPostsById);
routes.post('/post', PostValidation.create, PostController.postPosts);
routes.put('/post/:id', PostValidation.update, PostController.putPosts);
routes.delete('/post/:id', PostValidation.destroy, PostController.deletePost);
routes.get('/post/:id', PostController.contarPost)

export default routes;