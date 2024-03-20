const express = require("express")
const app=express()
require("dotenv").config()


app.use(express.json())


app.get("/",(req,res)=>{
    res.send("ssss")
})




app.listen(process.env.PORT,()=>{
    console.log(`listening at ${process.env.PORT}`)
})