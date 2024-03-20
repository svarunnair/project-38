const express = require("express")
const app=express()
require("dotenv").config()
const {connection}=require("./db")
const {userControler}=require("./routes/user.route")


app.use(express.json())

app.use("/user",userControler)



app.get("/",(req,res)=>{
    res.send("ssss")
})




app.listen(process.env.PORT,async()=>{
    try{
        await connection
        console.log("Successfully connected to db")
    }
    catch(err){
        console.log("err",err)
    }

    console.log(`listening at ${process.env.PORT}`)
})