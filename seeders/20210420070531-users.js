'use strict';

const Bcrypt = require("../helpers/bcrypt");

module.exports = {
  up: async (queryInterface, Sequelize) => {
  	var users = [];

  	for(let i=0;i<100;i++){
  	 users.push({
        username: `test${i}`,      
        email: `test${i}@gmail.com`,
        password: Bcrypt.hash("12345678")
      })
  	}

    await queryInterface.bulkInsert('users', users); 	
  },
  down: async (queryInterface, Sequelize) => {}
};
