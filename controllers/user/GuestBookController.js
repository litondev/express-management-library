const GuestBook = require(`${process.env.ROOT}/models/guestBook`);
const {Op} = require("sequelize").Sequelize;

class GuestBookController {
	index(req,res){	
		  let limit = 10;
  		let offset = 0 + ((req.query.page || 1) - 1) * limit;

  		let condition = {
  			where : {
  				userId : req.session.user.id
  			}
  		}

  		if(req.query.description){
  			condition = {
  				where : {
  					...condition.where,					  					  					  					  			
	  				description : {
              [Op.like] : '%'+req.query.description+'%'	  					  				
            }
  				}
  			}
  		}

  		GuestBook.findAndCountAll({
  			...condition,
     		offset : offset,
     		limit : limit,   
        attributes : ['id','description','createdAt'],
        order: [
          ['id','DESC']
        ]
  		}).then(result => {  			
    		// return res.status(200).json({
		    //   	status : true,
        //   			message: '',
        //   			innerData : {
        //           page : req.query.page || 1,
        //   				offset : offset,
        //   				limit : limit,
        //           pages : Math.ceil(((result.count < 10 ? 10 : result.count) / limit)),
        //   				...result
        //   			}
        //   		});

        return res.render("resources/user/guest-books/view",{
          title : "guest books",
          data : {
            page : req.query.page || 1,
            offset : offset,
            limit : limit,
            pages : Math.ceil(((result.count < 10 ? 10 : result.count) / limit)),
            ...result
          }
        });
  		})
      .catch(err => {
        res.setErrorPage(err.message);
      })
	}

  add(req,res){
    return res.render("resources/user/guest-books/add",{
      title : "add guest books",
      csrfToken : req.csrfToken()
    });
  }
}

module.exports = new GuestBookController();