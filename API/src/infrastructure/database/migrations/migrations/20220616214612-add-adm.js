'use strict';

const { defaultValueSchemable } = require("sequelize/types/utils");

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'user',
      'adm',
      {
        type: Sequelize.INTEGER,
        defaultValue: 0
      }
    )
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.removeColumn('users', 'adm')
  }
};