'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('books', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(50)
      },
      status: {        
        type: Sequelize.ENUM(['on borrow','off borrow']),
        defaultValue : 'off borrow'
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
          fields: ['name','status']
        }
      ]
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('books');
  }
};