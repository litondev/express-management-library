module.exports = (req,res,next) => {
   if(!req.session.user){
      res.redirect("/");
   }

   if(req.session.user.role != "admin"){
      res.redirect("/user");
   }

   var sessionFlash = req.session.sessionFlash;

   res.locals = {
    title : "",
    flashMessage : sessionFlash ? sessionFlash.flashMessage : null,
    flashMessageStatus : sessionFlash ? sessionFlash.flashMessageStatus : null,
    user : req.session.user || null
   };

   req.session.sessionFlash = null;

   res.setFallback = (status,message) => {
    req.session.sessionFlash = {
      "flashMessage" : message,
      "flashMessageStatus" : status
    };                
    res.redirect('back');
   }
   
   next();
   console.log("isAdmin");
}