import express from 'express';
import { AuthControler } from '../domain/Auth/authcontroller';
import PostController from '../domain/Posts/controllers/postController';
import { PostValidation } from '../domain/Posts/validations';
import { UsersController } from '../domain/Users/controllers/users.controller';
import { UserValidation } from '../domain/Users/validations';
const Auth = require('../middlewares/auth');


export const routes = express.Router();

routes.get('/user', UsersController.getAllUser);
routes.get('/user/:id', UserValidation.getOne, UsersController.getUserById);
routes.post('/user', UserValidation.create, UsersController.postUser);
routes.put('/user/:id', UserValidation.update, UsersController.putUser);
routes.delete('/user/:id', Auth, UserValidation.destroy, UsersController.deleteUser)

routes.get('/post', PostController.getAllPosts);
routes.get('/post/:id', PostValidation.getOne, PostController.getPostsById);
routes.post('/post', PostValidation.create, PostController.postPosts);
routes.put('/post/:id', PostValidation.update, PostController.putPosts);
routes.delete('/post/:id', PostValidation.destroy, PostController.deletePost);

routes.post('/login', AuthControler.login);
