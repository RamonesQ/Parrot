'use strict';

const { faker } = require('@faker-js/faker');

let seeders = [];

for (let i = 0; i < 10; i++) {
  seeders.push(
    {

      name: faker.name.firstName(),
      email: faker.internet.email(),
      apartment: 1,
      password: '123456',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  )
}



module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('user', seeders);
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('user', null, {});

  }
};
