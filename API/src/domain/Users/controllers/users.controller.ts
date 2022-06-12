import { Request, Response } from "express";
import { User } from "../../../infrastructure/database/model/users";
import bcrypt from 'bcryptjs'


export const UsersController = {
    async getAllUser(req: Request, res: Response) {
        try {
            const { page = 1 }: any = req.query;
            const limit = 5;
            const offset = limit * (page - 1);
            let filter = {
                limit,
                offset,
            };
            const getUsers = await User.findAll(filter);
            return res.status(200).json(getUsers);
        }
        catch (error) {
            return res.status(500).json("Erro ao listar os Usuarios");
        };
    },
    async getUserById(req: Request, res: Response) {
        try {
            const { idUser } = req.params;
            const getUser = await User.findByPk(idUser);

            if (!getUser) return res.status(404).json("Id não encontrado");
            return res.status(200).json(getUser);
        }
        catch (error) {
            return res.status(500).json("Erro ao listar o psicologo");
        };
    },
    async postUser(req: Request, res: Response) {
        try {
            const { name, email, apartment, password } = req.body
            const existingUser =
                await User.count({ where: { email } })
            if (existingUser) {
                return res.status(400).json('Email já está cadastrado')
            }
            const newSenha = bcrypt.hashSync(password, 10)
            const responseUsers = await User.create({
                name,
                email,
                apartment,
                password: newSenha
            });
            res.status(201).json(responseUsers);
        } catch (error) {
            return res.status(500).json("Erro ao tentar cadastrar");

        }
    },
    async putUser(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { name, email, apartment, password } = req.body
            const update = await User.update({
                name,
                email,
                apartment,
                password
            }, {
                where: {
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
    async deleteUser(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const del = await User.destroy({
                    where: {
                        idUser: id
                    }
                }
            );
            if (!del) return res.status(404).json("Id não encontrado");
            return res.status(204);
        } catch (error) {
            return res.status(500).json("Erro ao tentar excluir")
        };

        }
    }