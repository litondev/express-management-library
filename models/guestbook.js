const {Sequelize,DataTypes} = require("sequelize");
const DB = require("../config/database.js");

const GuestBook = DB.define("guest_books",{
    userId : {
      type: DataTypes.INTEGER
    },
    description : {
      type: DataTypes.TEXT
    },
    createdAt : {
      type : DataTypes.DATE
    }
});

GuestBook.belongsTo(DB.define("users"),{ 
	as : 'user',
});

// GuestBook.Testing = () => {
  // console.log("Hello Testing");
// };

module.exports = GuestBook;