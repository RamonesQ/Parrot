import express from "express";
import handleMiddleware from './middlewares/handleMiddleware';
import {routes} from './routes';

const app = express();

app.use(express.json());
app.use(routes);
app.use(handleMiddleware);


export default app;