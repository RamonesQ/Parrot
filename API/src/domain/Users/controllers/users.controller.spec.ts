import supertest from "supertest"
import app from "../../.."
import { UsersController } from "./users.controller"

describe('metodo getAllUser()', () => {
    test('deve ser do type function', () => {
        expect(typeof UsersController.getAllUser).toBe('function')
    })
    test('deve ser do type function', () => {
        expect(typeof UsersController.getUserById).toBe('function')
    })
    test('deve ser do type function', () => {
        expect(typeof UsersController.deleteUser).toBe('function')
    })
    test('deve ser do type function', () => {
        expect(typeof UsersController.postUser).toBe('function')
    })
    test('deve ser do type function', () => {
        expect(typeof UsersController.putUser).toBe('function')
    })
})

describe('No controller, ao executar função', () => {
    
describe('create', () => {
        test('em caso de sucesso, deve retornar 201', async () => {
            const res = await supertest(app)
                .post('/user')
                .send({
                    name: "meu nome",
                    email: "me@email.com",
                    apartment: 2,
                    password: "senha"
                })

            expect(res.status).toBe(201)
        })
})})
