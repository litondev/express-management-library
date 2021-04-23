const USERPATH = `${process.env.ROOT}/controllers/user`;
const ADMINPATH = `${process.env.ROOT}/controllers/admin`;

// USER CONTROLLER
module.exports.UserHomeController = require(`${USERPATH}/HomeController`);
module.exports.UserAuthController = require(`${USERPATH}/AuthController`);
module.exports.UserGuestBookController = require(`${USERPATH}/GuestBookController`);
module.exports.UserProfilController = require(`${USERPATH}/ProfilController`);

module.exports.UserActionAuthController = require(`${USERPATH}/actions/AuthController`);

// ADMIN CONTROLLER
module.exports.AdminHomeController = require(`${ADMINPATH}/HomeController`);
