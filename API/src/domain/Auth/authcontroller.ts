import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";
require('dotenv').config();
import { Request, Response } from "express";
import { relationship } from "../../infrastructure/database/model";

export const AuthControler = {

    async login(req: Request, res: Response) {
        const { email, password } = req.body;

        const userLogin = await relationship.User.findOne({
            where: {
                email,
            }
        })


        if (!userLogin) {
            return res.status(401).json("Usuário ou Senha invalido, verique e tente novamente");
        }

        if (!bcryptjs.compareSync(password, userLogin.password)) {
            return res.status(401).json("Senha invalido, verique e tente novamente");
        }



        const { idUser, name, apartment } = userLogin


        return res.json({
            user: {
                idUser,
                email,
                name,
                apartment,
            },
            token: jwt.sign({ idUser, name, email, apartment }, process.env.key!,)
        });
    }
}