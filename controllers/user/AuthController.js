class AuthController {
	index(req,res){		
		res.render("resources/user/signin",{
			title : "signin",
			csrfToken : req.csrfToken()
		});
	}
	
	signup(req,res){
		res.render("resources/user/signup",{
			title : "signup",
			csrfToken : req.csrfToken()
		})
	}
}

module.exports = new AuthController();