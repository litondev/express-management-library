class AuthController {
	index(req,res){		
		res.render("resources/user/signin",{
			title : "signin",
			csrfToken : req.csrfToken()
		});
	}	
}

module.exports = new AuthController();