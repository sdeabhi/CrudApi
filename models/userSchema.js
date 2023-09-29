const mongoose  = require("mongoose");

const userSchema = new mongoose.Schema({
    name : {type: String, required: true},
    email : {type: String, required: true, unique: true },
    password : {type: String, required: true},   
    profileImage : {type: String, default : ""},
    state : {type: String, required : true},
    district : {type: String, required : true},
    mobile : {type: Number, required : true},
    pincode : {type: Number, required : true}

},{collection : "users"})

module.exports = mongoose.model("users",userSchema)

