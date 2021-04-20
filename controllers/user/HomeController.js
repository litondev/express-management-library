// const User = require("../../models/User.js");

class HomeController {
	index(req,res){
		console.log("Controller");
		res.send("Testing Controller");
	}
}

const Controller = new HomeController();

module.exports = Controller;
