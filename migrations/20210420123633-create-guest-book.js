'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('guest_books', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      description: {
        type: Sequelize.TEXT
      },
      createdAt: {
        defaultValue : Sequelize.fn('NOW'),
        type: Sequelize.DATE
      },
      updatedAt: {
        defaultValue : Sequelize.fn('NOW'),
        type: Sequelize.DATE
      }
    },{
      indexes: [
        {
          unique : false,
          fields: ['description']
        }
      ]
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('guest_books');
  }
};