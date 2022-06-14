import { UsersController } from "./users.controller"

describe('metodo getAllUser()', () => {
    test('deve ser do type function', () => {
        expect(typeof UsersController.getAllUser).toBe('function')
    }) 
})