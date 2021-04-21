const GuestBook = require(`${process.env.ROOT}/models/guestbook`);
const User = require(`${process.env.ROOT}/models/user`);

class HomeController {
	index(req,res){
		console.log("Controller");

		// GuestBook.findAll({	
			// where : {
				// id : 1,
				// '$user.id$' : 1
			//},						
			//include : [
			   // {		
			   // 		model : User,	   	
			   // 		as : "user",		       		            
			   // 		where : {
			   // 			'id' : 2
			   // 		},
		    //         attributes: ['id'],		
		            // required : false,
			   		// include : "guest_books",
			   		// separate : true,
			   		// order : [
			   			// ['createdAt','DESC'],
			   		//]
		// 	   }
		// 	]
		// }).then(data => {
		// 	console.log(data[0]);
		// });

		// let limit = 10;
		// let offset = 0 + (req.body.page - 1) * limit;
		// Data.findAndCountAll({
		// offset : offset,
		// limit : limit,
		// order : []
		// }).then(result => {
        // return res.status(200).json({status : true,message: '',innerData : result})
		// })

		// res.send("Testing Controller User");

		res.render("resources/user/home",{
			title : "user"
		});
	}
}

module.exports = new HomeController();