const {Router}=require("express")
const { dataModel } = require("../models/data.models")
const dataControler= Router()



dataControler.get("/",async(req,res)=>{
    const data= await dataModel.find()
    res.send(data)
})

dataControler.post("/",async(req,res)=>{
    const {data,test}=req.body
    const new_data=new dataModel({
        data,
        test
    })
    try{
        await new_data.save()
        res.send("data entered")
    }
    catch(err){
        console.log("err",err)
    }

})



module.exports={dataControler}
