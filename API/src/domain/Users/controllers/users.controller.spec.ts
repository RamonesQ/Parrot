import supertest from "supertest"
import app from "../../.."
import { UsersController } from "./users.controller"

describe('metodo getAllUser()', () => {
    test('deve ser do type function', () => {
        expect(typeof UsersController.getAllUser).toBe('function')
    })
})

describe('No controller, ao executar função', () => {

    describe('create', () => {
        test('em caso de sucesso, deve retornar 201', async () => {
            const response = await supertest(app)
                .post('/users')
                .send({
                    name: "meu nome",
                    email: "meu@email.com",
                    apartment: 2,
                    password: "senha"
                })

            expect(response.status).toBe(201)
        })

        test('em caso de sucesso, retornar response do request', async () => {
            const response = await supertest(app)
                .post('/psicologos')
                .send({
                    "name": "Test",
                    "email": "abr2@gmail.com",
                    "apartment": 2,
                    "password": "joi"
                })
            expect(response.body).toEqual(
                expect.objectContaining({
                    "name": "Test",
                    "email": "abr2@gmail.com",
                    "apartment": 2
                })
            )
        })
        test('em caso de sucesso, deve retornar o usuaraio', async () => {
            const resposta = await (app)
                .post('/user/1')
            expect(resposta.status).toBe(201)
        })
    })
})