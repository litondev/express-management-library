const {Sequelize,DataTypes} = require("sequelize");

const User = require("../config/database.js")
  .define("users",{
  	username : {
    	type: DataTypes.STRING
  	}
  },{ 
  	freezeTableName: true,
  }
);

User.hasMany(
	require("../config/database.js").define("guest_books",{
		userId : {
      		type: DataTypes.INTEGER
    	},
    	description : {
	      	type: DataTypes.TEXT
    	}
	}),{ 
	as : 'guest_books',
});

module.exports = User;