const mongoose  = require("mongoose");

const careerSchema = new mongoose.Schema({
    name : {type: String, required: true},
    designation : {type : String, default : "" },
    resume : {type: String, default: ""},    
},{collection : "career"})

module.exports = mongoose.model("career",careerSchema);

