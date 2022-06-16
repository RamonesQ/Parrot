import express from "express";
import handleMiddleware from './middlewares/handleMiddleware';
import {routes} from './routes';
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);
app.use(handleMiddleware);


export default app;