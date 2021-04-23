class GuestBookController {
	index(req,res){	
		res.render("resources/user/guest-books",{
			title : "guest books"
		});
	}
}

module.exports = new GuestBookController();