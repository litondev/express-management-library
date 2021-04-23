const {check,validationResult} = require("express-validator");

module.exports = (req) => {
	async function valid(req){
		await check('description')			
			.not().isEmpty().withMessage("Deskripsi harus diisi")		
			.trim()			
			.run(req);

		return !validationResult(req).isEmpty() 
			? validationResult(req).array()[0]
			: false;
	}

	return valid(req);
}