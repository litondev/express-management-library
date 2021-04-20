'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {       
  	var guestBooks = [];

  	for(let i=0;i<100;i++){
  	  guestBooks.push({
        "userId" : 1,
        "description" : "Test"
      })
  	}

    await queryInterface.bulkInsert('guest_books',guestBooks); 	
  },

  down: async (queryInterface, Sequelize) => {   
  }
};
