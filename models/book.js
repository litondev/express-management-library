const {Sequelize,DataTypes} = require("sequelize");
const DB = require("../config/database.js");

module.exports = DB.define("books",{
    name : {
      type: DataTypes.STRING
    }
});