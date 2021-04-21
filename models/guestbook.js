const {Sequelize,DataTypes} = require("sequelize");
const User = require("./user");

const GuestBook = require("../config/database.js")
  .define("guest_books",{
    userId : {
      type: DataTypes.INTEGER
    },
    description : {
      type: DataTypes.TEXT
    }
  },{ 
    freezeTableName: true,
  }
);

GuestBook.belongsTo(User,{ 
	as : 'user',
});

GuestBook.Hello = () => {
  console.log("Hello");
};

module.exports = GuestBook;
