import { request } from "express"
import supertest from "supertest"
import app from "../index"


describe('Teste de rotas get user ()', () => {
    test('Recuperando todos os usuarios com get /user', async () => {
        const res = await supertest(app).get('/user')
        expect(res.status).toBe(200)
    })
    test('Recuperando os usuarios com paginaçao get /user?page=2', async () => {
        const res = await supertest(app).get('/user?page=2')
        expect(res.status).toBe(200)
    })
    test('Recuperando usuarios por ID get /user/2', async () => {
        const res = await supertest(app).get('/user/2')
        expect(res.status).toBe(200)
    })
    
})
