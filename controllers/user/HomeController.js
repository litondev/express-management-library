class HomeController {
	index(req,res){
		console.log("Controller");				

		res.send("Testing Controller User");

		// res.render("resources/user/home",{
		// 	title : "user"
		// });
	}
}

module.exports = new HomeController();

/*
	const {check,validationResult} = require("express-validator");

	async index(req,res){
		console.log("Controller");				
	
		await check('email').isEmail().run(req);
		await check('password').isLength({min:9}).run(req);
		const result = validationResult(req);
		console.log(result);
		if(!result.isEmpty()){
			return res.status(400).json({
				errors : result.array()
			})
		}
	}		
*/

/*
CSRF
// console.log(req.csrfToken());
*/

/*       
SESSION
// if(req.session.views){
// 	req.session.views += 1;
// 	console.log(req.session.views);
// }else{
// 	req.session.views = 1;
// }
// req.session.destroy();
//if(req.flash('test')){
//}else{
	//req.flash('test','Hai');
//}
// console.log(req.flash('test'));
*/

/*
const bcrypt  = require("bcryptjs");
	
var salt = bcrypt.genSaltSync(10);
var hash = bcrypt.hashSync("testing",salt);
console.log(hash);
console.log(bcrypt.compareSync("test",hash));
console.log(bcrypt.compareSync("testing",hash));
*/