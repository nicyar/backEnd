const mongoose = require('mongoose');

const db =mongoose.connect("mongodb+srv://nicolas:Nicolas123@coder.0r33awi.mongodb.net/?retryWrites=true&w=majority", 
{ useNewUrlParser: true });

const menssagesSchema = new Schema ({
    author:{type:{
        id :{type:Number,required:true},
        nombre:{type: String, required: true, max: 25},
        apellido:{type: String, required: true, max: 25},
        edad:{type: Number, required: true},
        alias:{type: String, required: true, max: 25},
        avatar:{type: String, required: true},
    },
    text: {type: String, required: true}

    }
})
// const chatSchema = new mongoose.Schema({
//     author: {type: Object, required: true },
//     text: {type: String, required: true},
//     time: {type: String, required: true}
// }, {
//     versionKey: false 
// })
const msgModel = mongoose.model("menssages",menssagesSchema);

module.exports={msgModel,db}