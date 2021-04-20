'use strict';
const {
  Model
} = require('sequelize');
const User = require("./user.js");

module.exports = (sequelize, DataTypes) => {
  class GuestBook extends Model {   
  };

  GuestBook.init({
    userId : {
		type: DataTypes.INTEGER
	},
    description : {
      	type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'GuestBook',
    tableName : "guest_books"
  });

  //GuestBook.associate = (models) => {
  	GuestBook.belongsTo(User,{
		foreignKey : 'userId',
		as : 'users',
		targetKey : 'id'
	});
  //}

  return GuestBook;
};