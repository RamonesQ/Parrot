'use strict';

let seeders = [];



module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('user', [{
      name: 'Teste',
      email: 'Teste@gmail.com',
      apartment: 1,
      password: 'teste',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  },

  async down(queryInterface, Sequelize) {
   
     await queryInterface.bulkDelete('user', null, {});
     
  }
};
