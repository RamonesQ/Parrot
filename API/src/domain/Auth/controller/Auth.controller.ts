import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import { User } from "../../../infrastructure/database/model/users";
require('dotenv').config();
const bcryptjs = require("bcryptjs")


export const AuthController = {
    async login(req: Request, res: Response) {
        const { email, password } = req.body;

        const userLogin = await User.findOne({
            where:{
                email
            }
        })
        if (!userLogin){
            return res.status(401).json("Usuário ou Senha invalido, verique e tente novamente");
        }

        if (!bcryptjs.compareSync(password, userLogin.password)){
            return res.status(401).json("Senha invalido, verique e tente novamente");
        }
        const key = 'abc'
        const token = jwt.sign({
            idUser:userLogin.idUser,
            nome:userLogin.name,
            email:userLogin.email
        }, key);
        return res.json(token);
       
    }
}