const AuthValidator = require(`${process.env.ROOT}/validators/user/AuthValidator`);
const User = require(`${process.env.ROOT}/models/user`);
const Bcrypt = require(`${process.env.ROOT}/helpers/bcrypt`);

class AuthController {
	signin(req,res){	   
		AuthValidator(req)
		.then(result => {
			if(result){			
				return res.setFallback('error',result.msg);
			}

			User.findOne({
				where : {
					email : req.body.email
				},
				attributes : ['id','email','password','role','photo','username'],
			}).then(result => {
				if(!result){
					return res.setFallback('error','Tidak Ditemukan')
				}

				if(!Bcrypt.check(req.body.password,result.password)){
					return res.setFallback('error','Password Salah')
				}
			
				req.session.user = {
					id : result.id,
					email : result.email,
					role : result.role,
					photo : result.photo,
					username : result.username				
				};

				res.redirect("/"+result.role);
			});		
		});
	}

	logout(req,res){
		req.session.destroy()
		res.redirect("/");
	}
}

module.exports = new AuthController();