import express from 'express';
import { AuthControler } from '../domain/Auth/authcontroller';
import PostController from '../domain/Posts/controllers/postController';
import { PostValidation } from '../domain/Posts/validations';
import { UsersController } from '../domain/Users/controllers/users.controller';
import { UserValidation } from '../domain/Users/validations';
const Auth = require('../middlewares/auth');


export const routes = express.Router();

routes.get('/user', Auth, UsersController.getAllUser);
routes.get('/user/:id', Auth, UserValidation.getOne, UsersController.getUserById);
routes.post('/user', UserValidation.create, UsersController.postUser);
routes.put('/user/:id', UserValidation.update, UsersController.putUser);
routes.delete('/user/:id', Auth, UserValidation.destroy, UsersController.deleteUser)

routes.get('/post', Auth, PostController.getAllPosts);
routes.get('/post/:id', Auth, PostValidation.getOne, PostController.getPostsById);
routes.post('/post', Auth, PostValidation.create, PostController.postPosts);
routes.put('/post/:id', Auth, PostValidation.update, PostController.putPosts);
routes.delete('/post/:id', Auth, PostValidation.destroy, PostController.deletePost);
routes.get('/post/:id', Auth, PostController.contarPost)

routes.post('/login', AuthControler.login);
