import { Request, Response } from "express";
import { User } from "../../../infrastructure/database/model/users";


export const UsersController = {
    async getAllUser(req: Request, res: Response) {
        try {
            const getUsers = await User.findAll();
            return res.json(getUsers);
        } catch (error) {
            console.error(error);

        }
    },
    async getUserById(req: Request, res: Response) {
        try {
            const { idUser } = req.params;
            const get = await User.findByPk(idUser);
      
            return res.json(get);
          } catch (error) {
            return res.status(500).json("Algo errado aconteceu, chame o batman!");
          }
        },
  
}