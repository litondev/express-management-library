const Sequelize = require("sequelize").Sequelize;

const db = new Sequelize("testing","root","",{
	host : "localhost",
	dialect : "mysql"
});

module.exports = db;