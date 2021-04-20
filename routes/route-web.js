const USERPATH = `${process.env.ROOT}/controllers/user`;
const ADMINPATH = `${process.env.ROOT}/controllers/admin`;

// USER CONTROLLER
module.exports.UserHomeController = require(`${USERPATH}/HomeController`);

// ADMIN CONTROLLER
module.exports.AdminHomeController = require(`${ADMINPATH}/HomeController`);
