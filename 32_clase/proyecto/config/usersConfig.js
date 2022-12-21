const mongoose = require('mongoose');

mongoose.set('strictQuery', false);
const DB = mongoose.connect("mongodb+srv://demo32:nicolas123@cluster0.tyb06ty.mongodb.net/?retryWrites=true&w=majority",{ useNewUrlParser: true })


const usersSchema = new mongoose.Schema ({
    users:{type:{
        username:{type: String, required: true, max: 50},
        password:{type: String, required: true, max: 25}
    }}
})

const usersModel=mongoose.model("baseUsers",usersSchema);

module.exports={usersModel,DB}


//configurarlo como en la clase 25
