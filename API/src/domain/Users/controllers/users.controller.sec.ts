import supertest from "supertest"
import app from "../../.."
import { UsersController } from "./users.controller"

describe('metodo ()', () => {
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
                    email: "mfadsd@email.com",
                    apartment: 2,
                    password: "senha"
                })

            expect(res.status).toBe(201)
        })
})
describe('Teste de rotas get user ()', () => {
    test('Recuperando todos os usuarios com get /user', async () => {
        const res = await supertest(app).get('/user')
        expect(res.status).toBe(200)
    })
    test('Recuperando usuarios por ID get /user/2', async () => {
        const res = await supertest(app).get('/user/2')
        expect(res.status).toBe(200)
    })
})
describe('Atualizando user', () => {
    test('em caso de sucesso, deve retornar 201', async () => {
        const res = await supertest(app)
        .put('/users/5')
        .send({ 
            "name": "supertest",
            "email": "supertest10@gmail.com",
            "password": "12345678",
            "apartment": "124",
        }).expect(200);
    })      
})
describe('Deletando user', () => {
    test('em caso de sucesso, deve retornar 201', async () => {
        const res = await supertest(app)
        .delete('/users/6')
        .expect(204);
    })      
})

})
