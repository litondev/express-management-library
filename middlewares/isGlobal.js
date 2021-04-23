module.exports = (req,res,next) => { 
   next();
   console.log("isGlobal");
}