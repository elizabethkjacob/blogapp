const mongoose= require("mongoose");

const schema = mongoose.Schema({
    Name:String,
    Email:String,
    Address:String,
    Username:String,
    Password:String
});
const usermodel = mongoose.model('user',schema);
module.exports = usermodel;