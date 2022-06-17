import supertest from "supertest"
import app from "../../.."
import PostController from "./postController"

describe('No controller, ao executar a função', () => {
    describe('create', () => {
        test('caso sucesso é do tipo function.', () => {
            expect(typeof PostController.getAllPosts).toBe('function')
        });
        test('em caso de sucesso, deve retornar 200.', async () => {
            const res = await supertest(app).get('/post')
            expect(res.status).toBe(200)
        })
        
    })
    describe('create', () => {
        test('em caso de sucesso, deve retornar 201', async () => {
            const res = await supertest(app)
                .post('/post')
                .send({
                    user_idUser: 2,
                    content: "aaaaaaaaaaa"
                })

            expect(res.status).toBe(201)
        })
})
describe('Atualizando post', () => {
    test('em caso de sucesso, deve retornar 200', async () => {
        const res = await supertest(app)
        .put('/post/4')
        .send({ 
            "content": "bbb"
        }).expect(200);
    })      
})
})