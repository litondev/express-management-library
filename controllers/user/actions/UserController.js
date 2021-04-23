const UserDataValidator = require(`${process.env.ROOT}/validators/user/UserDataValidator`);
// const UserPhotoValidator = require(`${process.env.ROOT}/validators/user/UserPhotoValidator`);
const User = require(`${process.env.ROOT}/models/user`);
const {Op} = require("sequelize").Sequelize;
const Bcrypt = require(`${process.env.ROOT}/helpers/bcrypt`);

class UserController {
	updatePhoto(req,res){
		res.send("Photo");
	}

	updateData(req,res){
		UserDataValidator(req)
		.then(result => {
			if(result){			
				return res.setFallback('error',result.msg);
			}

			User.findOne({
				where : {				
					email : req.body.email,															
					id : {
						[Op.notIn] : [req.session.user.id]
					},
				},
				attributes : ['id']
			}).then(result => {
				if(result){
					return res.setFallback('error','Email telah terpakai');
				}

				User.findOne({
					where : {				
						id : req.session.user.id
					},
					attributes : ['id','email','password']
				}).then(user => {
					if(!Bcrypt.check(req.body.password_confirm,user.password)){
						return res.setFallback('error','Password Konfirmasi Salah')
					}

					let payload = {
						email : req.body.email,
					}

					if(req.body.password){
						payload.password =  Bcrypt.hash(req.body.password)
					}
					
					user.update(payload).then(result => {
						// UPDATE SESSION
						return result ? res.setFallback("success","Berhasil update") : res.setFallback("error","Gagal update")
					})
					.catch(err => {
						res.setErrorPage(err.message)
					})
				}).catch(err => {
					res.setErrorPage(err.message)
				});
			}).catch(err =>{
				res.setErrorPage(err.message)				
			});
		})
		.catch(err => {
			res.setErrorPage(err.message)				
		})
	}
}

module.exports = new UserController();