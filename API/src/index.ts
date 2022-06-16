import express from "express";
import handleMiddleware from './middlewares/handleMiddleware';
import login from './routes/loginRoutes'
import post from './routes/postRoutes'
import user from './routes/userRoutes'
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());
app.use(login);
app.use(post);
app.use(user);
app.use(handleMiddleware);


export default app;