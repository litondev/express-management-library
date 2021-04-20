'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  	var Books = [];

  	for(let i=0;i<100;i++){
  	  Books.push({
        "name" : "name${i}"
      });
  	}

    await queryInterface.bulkInsert('books', Books); 	
  },

  down: async (queryInterface, Sequelize) => {
  }
};
