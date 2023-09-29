const mongoose  = require("mongoose");

const authSchema = new mongoose.Schema({
    name : {type: String, required: true},
    username : {type: String, required: true},
    image : {type: String, default: ""},
    city : {type: String, required: true},
    state : {type: String, required: true},
    address : {type: String, required: true},
    pincode : {type: String, required: true},
    mobile : {type: String, required: true},
    email : {type: String, required: true, unique: true },
    password : {type: String, required: true},   
},{collection : "auth"})

module.exports = mongoose.model("auth",authSchema)

