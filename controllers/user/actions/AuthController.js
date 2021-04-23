const SigninValidator = require(`${process.env.ROOT}/validators/user/SigninValidator`);
const SignupValidator = require(`${process.env.ROOT}/validators/user/SignupValidator`);
const User = require(`${process.env.ROOT}/models/user`);
const Bcrypt = require(`${process.env.ROOT}/helpers/bcrypt`);
const {Op} = require("sequelize").Sequelize;

class AuthController {
	signin(req,res){	   
		SigninValidator(req)
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
					username : result.username,
					// instane : user (for create foreign key and etc)				
				};

				res.redirect("/"+result.role);
			}).catch(err => {
				res.setErrorPage(err.message)					
			})
		}).catch(err => {
			res.setErrorPage(err.message)				
		})
	}

	signup(req,res){		
		SignupValidator(req)
		.then(result => {
			if(result){			
				return res.setFallback('error',result.msg);
			}

			User.findOne({
				where : {
					[Op.or] : {
						email : req.body.email,
						username : req.body.username
					}
				},
				attributes : ['id']
			}).then(result => {
				if(result){
					return res.setFallback('error','Email atau username telah terpakai');
				}

				User.create({
					'username' : req.body.username,
					'email' : req.body.email,
					'password' : Bcrypt.hash(req.body.password)
				}).then(result => {					
					return result ? res.redirect("/") : res.setFallback("error","Gagal membuat akun");					
				}).catch(err => {
					res.setErrorPage(err.message)					
				})
			})
			.catch(err => {
				res.setErrorPage(err.message)
			})
		})
		.catch(err => {
			res.setErrorPage(err.message)	
		})
	}

	logout(req,res){
		req.session.destroy()
		res.redirect("/");
	}
}

module.exports = new AuthController();