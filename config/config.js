// FOR MIGRATE AND SEEDER
// npx sequelize-cli model:generate --name GuestBooks --attributes name:string
// npx sequelize-cli seed:generate --name GuestBooks

require("dotenv").config();

module.exports = {
  "development": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "host": process.env.DB_HOST,
    "dialect": process.env.DB_DB
  }  
}