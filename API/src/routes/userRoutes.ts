import express from 'express';
import { UsersController } from '../domain/Users/controllers/users.controller';
import { UserValidation } from '../domain/Users/validations';
const Auth = require('../middlewares/auth');


const routes = express.Router();

routes.get('/user', UsersController.getAllUser);
routes.get('/user/:id', UserValidation.getOne, UsersController.getUserById);
routes.post('/user', UserValidation.create, UsersController.postUser);
routes.put('/user/:id', UserValidation.update, UsersController.putUser);
routes.delete('/user/:id', Auth, UserValidation.destroy, UsersController.deleteUser)

export default routes;