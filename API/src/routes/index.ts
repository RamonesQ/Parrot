import express from 'express';
import { AuthController } from '../domain/Auth/controller/Auth.controller';
import PostController from '../domain/Posts/controllers/postController';
import { UsersController } from '../domain/Users/controllers/users.controller';
const Auth = require('../middlewares/auth');


export const routes = express.Router();

routes.get('/user', UsersController.getAllUser);
routes.get('/user/:id', UsersController.getUserById);
routes.post('/user', UsersController.postUser);
routes.post('/login', AuthController.login);
routes.put('/user/:id', UsersController.putUser);
routes.delete('/user/:id', UsersController.deleteUser)

routes.get('/post', PostController.getAllPosts);
routes.post('/post', PostController.postPosts);



