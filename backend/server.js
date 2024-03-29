const express = require("express")
const app=express()
require("dotenv").config()
const {connection}=require("./db")
const {userControler}=require("./routes/user.route")
const { dataControler } = require("./routes/data.router")
const { authentication } = require("./middleware/authentication")
const cors = require('cors')


app.use(express.json())
app.use(cors())
app.use("/user",userControler)
app.use(authentication)
app.use("/data",dataControler)



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