const jwt = require('jsonwebtoken');
require("dotenv").config()


const authentication=(req,res,next)=>{
    if(!req.headers.authorization){
        res.send("Please login again")
    }
    const token=req.headers.authorization.split(" ")[1]
    jwt.verify(token, process.env.SECRET, function(err, decoded) {
        console.log("decoded",decoded)
        if(err){
            res.send("Please login againn")
        }if(decoded.userId!==undefined){
            req.body.userId=decoded.userId
            next()
        }
        // else{

        //     console.log("decoded",req.body.userId)
        //     console.log("v",decoded.userId)


           
        // }
      });

}


module.exports={authentication}