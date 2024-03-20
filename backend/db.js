const mongoose=require("mongoose")
require("dotenv")
const connection =mongoose.connect(process.env.URL)

module.exports={connection}
