class HomeController {
	index(req,res){
		console.log("Controller");		

		// res.send("Testing Controller User");

		res.render("resources/user/home",{
			title : "user"
		});
	}
}

module.exports = new HomeController();