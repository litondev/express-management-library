module.exports = (req,res,next) => {
   if(req.session.user){
      return res.redirect("/user");
   }    

   var sessionFlash = req.session.sessionFlash;

   res.locals = {
    title : "",
   	flashMessage : sessionFlash ? sessionFlash.flashMessage : null,
   	flashMessageStatus : sessionFlash ? sessionFlash.flashMessageStatus : null,
   };

   req.session.sessionFlash = null;

   res.setFallback = (status,message) => {
    req.session.sessionFlash = {
      "flashMessage" : message,
      "flashMessageStatus" : status
    };						    
    res.redirect('back');
   }

  res.setErrorPage = (error,status = 500) => {
    if(status === 500){
      res.render("resources/errors/500",{
        error : error
      })
    }else if(status === 400){
      res.render("resources/errors/404",{
        error : error
      });
    }
   }

   next();
   console.log("isNotAuth");
}