class ProfilController {
	index(req,res){	
		res.render("resources/user/profil",{
			title : "profil"
		});
	}
}

module.exports = new ProfilController();