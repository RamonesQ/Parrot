'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('post', {
      idPost: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_idUser: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'user',
          },
          key: 'idUser'
        },
        onDelete: 'cascade',
        allowNull: false
      },
      content: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('post');
  }
};