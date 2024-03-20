const {Router}=require("express")
const {userModel}=require("../models/user.models")
const userControler=Router()
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken')



userControler.post("/signup",(req,res)=>{
    const {name,email,password}=req.body
    bcrypt.hash(password, 5,async function(err, hash) {
        if(err){
            res.send("Something went wrong")
        }
        const user= await userModel({
            name,
            email,
            password:hash
        })

        try{
            await user.save()
            res.send({success:true,user})
        }
        catch(err){
            res.send("error",err)
        }
     
    });
})




userControler.post("/login",async(req,res)=>{
    const {email,password}=req.body
    const user= await userModel.findOne({email})
    const hash=user.password
    bcrypt.compare(password, hash, function(err, result) {
        if(err){
            res.send("Something went wrong")
        }
        if(result){
            var token = jwt.sign({userId:user._id}, process.env.SECRET);
            res.send({msg:user, token})

        }
        else{
            res.send("please signup")
        }
    });
})




module.exports={userControler}

