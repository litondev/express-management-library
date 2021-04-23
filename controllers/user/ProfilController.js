class ProfilController {
	index(req,res){	
		res.render("resources/user/profil",{
			title : "profil",
			csrfToken : req.csrfToken()
		});
	}
}

module.exports = new ProfilController();