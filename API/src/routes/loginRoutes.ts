import express from 'express';
import { AuthControler } from '../domain/Auth/authcontroller';

const routes = express.Router();


routes.post('/login', AuthControler.login);

export default routes;