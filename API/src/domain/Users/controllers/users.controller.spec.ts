import { UsersController } from "./users.controller"

describe('metodo getAllUser()', () => {
    test('deve ser do type function', () => {
        expect(typeof UsersController.getAllUser).toBe('function')
    }) 
    test('deve ser do type function', async () => {
        expect(await UsersController.getAllUser()).toBe()
    })
})