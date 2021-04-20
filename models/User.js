const {Sequelize,DataTypes} = require("sequelize");

module.exports = require("../config/database.js").define("users",{
  	username : {
    	type: DataTypes.STRING
  	}
  },{ 
  	freezeTableName: true,
  }
);