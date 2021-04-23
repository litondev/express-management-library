const bcrypt  = require("bcryptjs");

var salt = bcrypt.genSaltSync(10);

module.exports.hash = (data) => {
	return bcrypt.hashSync(data,salt);
}

module.exports.check = (data,hash) => {
	return bcrypt.compareSync(data,hash);
}