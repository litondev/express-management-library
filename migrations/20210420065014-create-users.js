'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING(50),
        unique: true
      },
      email: {
        type: Sequelize.STRING(50),
        unique: true
      },
      password: {
        type: Sequelize.TEXT
      },
      role: {
        type: Sequelize.ENUM(['admin','user']),
        defaultValue : 'user'
      },
      photo: {
        type: Sequelize.STRING(50),
        defaultValue : 'user.png'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue : Sequelize.fn('NOW')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue : Sequelize.fn('NOW')
      }
    },{
      indexes: [
        {
          unique : true,
          fields: ['email','username']
        }
      ]
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};