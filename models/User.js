const {Sequelize,DataTypes} = require("sequelize");
const DB = require("../config/database.js");

const User = DB.define("users",{
  username : {
    type: DataTypes.STRING(50)
  },
  email : {
  	type: DataTypes.STRING(50)
  },
  password : {
  	type: DataTypes.TEXT
  },
  role : {
    type: DataTypes.ENUM(['user','admin'])
  },
  photo : {
    type: DataTypes.STRING(50)
  }
});

User.hasMany(DB.define("guest_books"),{ 
	as : 'guest_books',
});

module.exports = User;