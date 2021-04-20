class HomeController {
	index(req,res){
		console.log("Controller");
		// res.send("Testing Controller Admin");
		res.render("resources/admin/home",{
			title : "admin"
		});
	}
}

module.exports = new HomeController();