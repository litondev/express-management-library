const {Sequelize,DataTypes} = require("sequelize");
const DB = require("../config/database.js");

const GuestBook = DB.define("guest_books",{
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

GuestBook.belongsTo(DB.define("users"),{ 
	as : 'user',
});

GuestBook.Testing = () => {
  console.log("Hello Testing");
};

module.exports = GuestBook;

/*
// Reational Database
const GuestBook = require(`${process.env.ROOT}/models/guestbook`);
const User = require(`${process.env.ROOT}/models/user`);
GuestBook.findAll({ 
      where : {
        id : 1,
        // '$user.id$' : 1
      },            
      include : [
         {    
            model : User,     
            as : "user",                          
            // where : {
              // 'id' : 2
            // },
                attributes: ['id'],   
                // required : false,
            include : {
              model : GuestBook,
              as : "guest_books",
              limit : 10
            },
            // separate : true,
            // order : [
              // ['createdAt','DESC'],
            // ]
         }
      ]
    }).then(data => {
      console.log(data[0].user);
    });
*/


/*
  // Pagination

  let limit = 10;
  let offset = 0 + (req.body.page - 1) * limit;
  GuestBook.findAndCountAll({
     offset : 10,
     limit : 10,   
  }).then(result => {
    return res.status(200).json({
      status : true,
      message: '',
      innerData : result
      });
  });
*/