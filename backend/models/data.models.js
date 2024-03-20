const mongoose = require("mongoose")

const dataSchema= mongoose.Schema({
    data:{type :String, required: true},
    test:{type :String, required: true},
    
})


const dataModel= mongoose.model("datadetail", dataSchema)



module.exports={dataModel}