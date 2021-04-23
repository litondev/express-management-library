const GuestBookValidator = require(`${process.env.ROOT}/validators/user/GuestBookValidator`);
const GuestBook = require(`${process.env.ROOT}/models/guestBook`);
const {Op} = require("sequelize").Sequelize;

class GuestBookController {
	destroy(req,res){
		if(parseInt(req.params.id) < 1){
			return res.redirect("/user/guest-books");
		}

		GuestBook.destroy({
			where : {
				id : req.params.id
			}
		}).then(result => {		
			return result ? res.setFallback("success","Berhasil hapus data")
				: res.setFallback("error","Tidak dapat menghapus data");		
		}).catch(err => {
			res.setErrorPage(err.message)					
		})
	}

	add(req,res){
		GuestBookValidator(req)
		.then(result => {
			if(result){
				return res.setFallback('error',result.msg);
			}

			GuestBook.create({
				"userId" : req.session.user.id,
				"description" : req.body.description
			}).then(result => {
				return result ? res.setFallback("success","Berhasil menambah data")
					: res.setFallback("error","Tidak dapat menambah data");
			}).catch(err => {
				res.setErrorPage(err.message)					
			});
		}).catch(err => {
			res.setErrorPage(err.message)					
		});
	}
}

module.exports = new GuestBookController();