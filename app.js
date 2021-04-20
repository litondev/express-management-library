const express = require('express');
const app = express();
const bodyParser = require('body-parser');    
const session = require('express-session');
const webRoute = require("./routes/web.js");
const db = require("./configs/database.js");

require("dotenv").config();

const port = process.env.port || 3000;

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
    secret: "secret123",
    saveUninitialized: true,
    resave: true
}));

db.authenticate().then(() => {
	console.log("Yes");
})
.catch((err) => {
	console.log(err);
})

const winston = require("winston");

winston.loggers.add("development",{
	level : 'info',
	format : winston.format.json(),
	transports : [
		new winston.transports.File({
			filename : 'error.log'
		})
	]
});

winston.loggers.get("development").info("testing");

webRoute(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})