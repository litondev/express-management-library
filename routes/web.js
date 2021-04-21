const {
  UserHomeController,
  AdminHomeController
} = require("./route-web");

const express = require('express');
const csrf = require("csurf");
const csrfProtection = csrf({cookie : true});

const adminRouter = express.Router(); 
const userRouter = express.Router(); 

module.exports = (app) => {   
 adminRouter.use(require("../middlewares/isAdmin"));
 userRouter.use(require("../middlewares/isUser")); 

  // Admin
  adminRouter.get("/",AdminHomeController.index);

  // User
  app.get("/",csrfProtection,UserHomeController.index); 

  // Use All Route
  app.use("/admin",adminRouter);
  app.use("/user",userRouter);
};