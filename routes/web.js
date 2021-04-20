const UserHomeController = require("../controllers/user/HomeController");

module.exports = (app) => {   
 const express = require('express');

 const adminRouter = express.Router(); 
 const userRouter = express.Router(); 

 adminRouter.use(require("../middlewares/isAdmin"));
 userRouter.use(require("../middlewares/isUser")); 

  // Admin
  adminRouter.get("/",(req,res) => {
    console.log('Hai');
    res.send('Hai');
  });

  // User
  app.get("/",UserHomeController.index); 

  userRouter.get("/",(req,res) => {
    console.log("Test User");
    res.send("Test User");
  });

  app.use("/admin",adminRouter);
  app.use("/user",userRouter);
};