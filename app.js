const express = require('express');
const app = express();
const path = require("path");
const bodyParser = require('body-parser');    
const session = require('express-session');
const flash = require("connect-flash");
const cookieParser = require("cookie-parser");

require("dotenv").config();

process.env.ROOT = __dirname;

app.set("views",path.join(__dirname,'views'));
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(cookieParser(process.env.SESSION_SECRET));
app.use(session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: true,
    resave: true
}));
app.use(flash());

const db = require("./config/database.js");
db.authenticate().then(() => {
	console.log("Yes");
})
.catch((err) => {
	console.log("NO");
});

// const winston = require("winston");
// winston.loggers.add("development",{
// 	level : 'info',
// 	format : winston.format.json(),
// 	transports : [
// 		new winston.transports.File({
// 			filename : './logs/logs.log'
// 		})
// 	]
// });
// winston.loggers.get("development").info("Log Ready");

require("./routes/web.js")(app);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Live`);
})