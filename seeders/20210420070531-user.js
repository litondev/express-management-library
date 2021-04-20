'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
  	var users = [];

  	for(let i=0;i<100;i++){
  	 users.push({
        username: `test${i}`,      
        email: `test${i}@gmail.com`,
        password: 'text'
      })
  	}

    await queryInterface.bulkInsert('users', users); 	
  },
  down: async (queryInterface, Sequelize) => {}
};
