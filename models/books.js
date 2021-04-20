const {Sequelize,DataTypes} = require("sequelize");

module.exports = require("../config/database.js").define("books",{
    name : {
      type: DataTypes.STRING
    }
  },{ 
  	freezeTableName: true,
  }
);