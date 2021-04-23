class HomeController {
	index(req,res){
		res.render("resources/admin/home",{
			title : "admin"
		});
	}
}

module.exports = new HomeController();