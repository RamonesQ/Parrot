import { request } from "express"
import supertest from "supertest"
import app from "../index"
const { faker } = require("@faker-js/faker")

describe('Teste de rotas ()', () => {
    test('Recuperando todos os usuarios com get /users', async () => {
        const res = await supertest(app).get('/user')
        console.log(res.body)
        expect(res.status).toBe(200)
    })
    test('Recuperando os usuarios com paginaçao get /user?page=2', async () => {
        const res = await supertest(app).get('/user?page=2')
        console.log(res.body)
        expect(res.status).toBe(200)
    })
    test('Recuperando usuarios por ID get /user/2', async () => {
        const res = await supertest(app).get('/user/2')
        console.log(res.body)
        expect(res.status).toBe(200)
    })
    
})
