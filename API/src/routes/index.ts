import express from 'express';
import { UsersController } from '../domain/Users/controllers/users.controller';


export const routes = express.Router();

routes.get('/user', UsersController.getAllUser);
routes.get('/user/:id', UsersController.getUserById);
// // routes.post()
// // routes.put()
// // routes.delete()


