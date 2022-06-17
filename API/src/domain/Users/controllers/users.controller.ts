import { Request, Response } from "express";
import { relationship } from "../../../infrastructure/database/model/";
import bcrypt from 'bcryptjs'
require('dotenv').config();


export const UsersController = {
    async getAllUser(req: Request, res: Response) {
        try {
            const getUsers = await relationship.User.findAll({
                include: relationship.Post,
                attributes: ['idUser', 'name', 'email', 'apartment', 'createdAt', 'updatedAt']
            });
            return res.status(200).json(getUsers);
        }
        catch (error) {
            return res.status(500).json(error);
        };
    },
    async getUserById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const getUser = await relationship.User.findByPk(id, {
                include: relationship.Post,
                attributes: ['idUser', 'name', 'email', 'apartment', 'createdAt', 'updatedAt']
            });

            if (!getUser) return res.status(404).json("Id não encontrado");
            return res.status(200).json(getUser);
        }
        catch (error) {
            return res.status(500).json(error);
        };
    },
    async postUser(req: Request, res: Response) {
        try {
            const { name, email, apartment, password } = req.body
            const existingUser =
                await relationship.User.count({ where: { email } })
            if (existingUser) {
                return res.status(400).json('Email já está cadastrado')
            }
            const newSenha = bcrypt.hashSync(password, 10)
            const responseUsers = await relationship.User.create({
                name,
                email,
                apartment,
                password: newSenha
            });
            res.status(201).json(responseUsers);
        } catch (error) {
            return res.status(500).json(error);

        }
    },
    async putUser(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { name, email, apartment, password } = req.body
            const newSenha = bcrypt.hashSync(password, 10)
            const update = await relationship.User.update({
                name,
                email,
                apartment,
                password: newSenha
            }, {
                where: {
                    idUser: id
                }
            }
            );
            if (update == 0) return res.status(404).json("Id invalido");
            return res.status(200).json("Usuario Atualizado");
        } catch (error) {
            return res.status(500).json(error)

        }
    },
    async deleteUser(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const del = await relationship.User.destroy({
                where: {
                    idUser: id
                }
            }
            );
            if (!del) return res.status(404).json("Id não encontrado");
            return res.status(204);
        } catch (error) {
            return res.status(500).json(error)
        };

    },

   
}