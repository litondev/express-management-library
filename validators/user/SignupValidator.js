const {check,validationResult} = require("express-validator");

module.exports = (req) => {
	async function valid(req){
		await check('username')
			.not().isEmpty().withMessage("Username harus diisi")
			.trim()
			.run(req);

		await check('email')			
			.not().isEmpty().withMessage("Email harus diisi")
			.isEmail()
			.withMessage("Email tidak valid")
			.trim()			
			.run(req);

		await check('password')
			.not().isEmpty().withMessage("Password harus diisi")
			.isLength({min:8})
			.withMessage("Password harus lebih dari 8 digit")
			.trim()
			.run(req);

		return !validationResult(req).isEmpty() 
			? validationResult(req).array()[0]
			: false;
	}

	return valid(req);
}