class HomeController {
	index(req,res){	
		res.render("resources/user/home",{
			title : "home"
		});
	}
}

module.exports = new HomeController();