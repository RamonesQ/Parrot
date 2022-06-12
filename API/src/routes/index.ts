import express from 'express';
import { AuthController } from '../domain/Auth/controller/Auth.controller';
import { UsersController } from '../domain/Users/controllers/users.controller';


export const routes = express.Router();

routes.get('/user', UsersController.getAllUser);
routes.get('/user/:id', UsersController.getUserById);
routes.post('/user', UsersController.postUser);
routes.post('/login', AuthController.login);
// // routes.put()
// // routes.delete()


