const mongoose = require('mongoose');

const userSchema=new mongoose.Schema({
    username: {type: String, required: true, max: 30},
    password: {type: String, required: true, max: 20}
})

let User = mongoose.model('users',userSchema)
module.exports={userSchema,User};