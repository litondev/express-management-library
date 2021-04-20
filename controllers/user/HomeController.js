const GuestBook = require(`${process.env.ROOT}/models/guestbook`);
const User = require(`${process.env.ROOT}/models/user`);
const db = require(`${process.env.ROOT}/config/database`);
const { DataTypes} = require("sequelize");

class HomeController {
	index(req,res){
		console.log("Controller")	
		GuestBook(db,DataTypes).findAll({	
			where : {
				id : 1
			},						
			include : "users"
		}).then(data => {
			console.log(data[0].users);
		});
		// res.send("Testing Controller User");
		res.render("resources/user/home",{
			title : "user"
		});
	}
}

module.exports = new HomeController();