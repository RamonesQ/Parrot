import { Post } from "../../../infrastructure/database/model/posts";
import { Request, Response } from "express";

const PostController = {

    async getAllPosts(req: Request, res: Response) {
        const response = await Post.findAll();
        res.json(response);
    },

    async postPosts(req: Request, res: Response) {
        const { user_idUser, content } = req.body;
        const response = await Post.create({
            user_idUser,
            content
        });
        res.json(response);
        
    },
}

export default PostController;