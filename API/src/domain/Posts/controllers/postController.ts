import { relationship } from "../../../infrastructure/database/model/";
import { Request, Response } from "express";
import { Post } from "../../../infrastructure/database/model/posts";
interface AuthRequest extends Request{
    Auth: any
  }

const PostController = {

    async getAllPosts(req: Request, res: Response) {
        try {
            const response = await relationship.Post.findAll({
                include: relationship.User,
            });
            return res.status(200).json(response);

        } catch (error) {
            return res.status(500).json(error);

        }
    },
    async getPostsById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const postId = await relationship.Post.findByPk(id, {
                include: relationship.User,
            });

            if (postId == null) {
                return res.status(404).json('Id não encontrado');
            }

            res.status(200).json(postId);

        } catch (error) {
            return res.status(500).json(error);

        }
    },

    async postPosts(req: Request, res: Response) {
        try {
            const { user_idUser, content } = req.body
            const post = await relationship.Post.create({
                user_idUser,
                content
            });

            res.status(201).json(post);
        } catch (error) {
            return res.status(500).json(error);

        }
    },
    async putPosts(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { content } = req.body
            const update = await relationship.Post.update({
                content
            },
                {
                    where: {
                        idPost: id
                    }
                });


            if (update == 0) {
                return res.status(404).json('Post não encontrado');
            }
            return res.json('Post Atualizado');
        } catch (error) {
            return res.status(500).json(error);

        }
    },

    async deletePost(req: Request, res: Response) {
        try {
            const { id } = req.params;

            const exclude = await relationship.Post.destroy({
                where: {
                    idPost: id
                }
            })
            if (!exclude) return res.status(404)
            .json("Id não encontrado");
            return res.status(204);
        } catch (error) {
            return res.status(500).json(error);

        }
    },
    async contarPost(req: Request, res: Response) {
        try {
          const contadorPost = await Post.count();
          return res.status(200).json(` ${contadorPost}`);
        } catch (error) {
          return res.status(500).json(error);
        }
      }
}


export default PostController;