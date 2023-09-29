const mongoose  = require("mongoose");

const contactSchema = new mongoose.Schema({
    name : {type: String, required: true},
    email : {type: String, required: true, unique: true },
    subject : {type: String, required: true},   
    message : {type: String, required: true},   
},{collection : "contact"})

module.exports = mongoose.model("contact",contactSchema);

