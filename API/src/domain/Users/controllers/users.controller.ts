import { Request, Response } from "express";
import { User } from "../../../infrastructure/database/model/users";
import bcrypt from 'bcryptjs'


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
    async postUser(req: Request, res: Response) {
        try {
            const {name, email, apartment, password} = req.body
            const newSenha = bcrypt.hashSync(password, 10)
            const responseUsers = await User.create({
                name,
                email,
                apartment,
                password:newSenha
            });
            return res.json(responseUsers);
        } catch (error) {
            console.error(error);

        }
    },
    async putUser(req: Request, res: Response) {
        const {id} = req.params;
        try {
            const {name, email, apartment, password} = req.body
            const update = await User.update({
                name,
                email,
                apartment,
                password
            },{
                where:{
                    idUser: id
                }
            }
            );
            if (update == 0) return res.status(400).json("Id invalido");
            return res.status(200).json("Usuario Atualizado");
        } catch (error) {
            return res.status(500).json("Erro ao tentar atualizar")

        }
    },

}