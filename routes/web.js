const {
  UserHomeController,
  UserAuthController,
  UserGuestBookController,
  UserProfilController,

  UserActionAuthController,

  AdminHomeController
} = require("./route-web");

const express = require('express');
const csrf = require("csurf");
const csrfProtection = csrf({cookie : true});

const adminRouter = express.Router(); 
const userRouter = express.Router(); 
const globalRouter = express.Router();
const notAuthRouter = express.Router();

module.exports = (app) => {  
  globalRouter.use(require("../middlewares/isGlobal"));
  notAuthRouter.use(require("../middlewares/isNotAuth"));
  adminRouter.use(require("../middlewares/isAdmin"));
  userRouter.use(require("../middlewares/isUser")); 

  // Admin
  adminRouter.get("/",AdminHomeController.index);

  // User
  notAuthRouter.get("/",csrfProtection,UserAuthController.index); 
  notAuthRouter.post("/signin",csrfProtection,UserActionAuthController.signin);

  userRouter.get("/logout",UserActionAuthController.logout);
  userRouter.get("/",UserHomeController.index);
  userRouter.get('/guest-books',UserGuestBookController.index);
  userRouter.get("/profil",UserProfilController.index);

  // Use All Route
  app.use("/admin",adminRouter);
  app.use("/user",userRouter);
  app.use("/",globalRouter);
  app.use("/",notAuthRouter);
};