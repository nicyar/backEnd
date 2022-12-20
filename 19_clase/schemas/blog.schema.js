const mongoose = require('moongose');
const {Schema}=mongoose;

const blogSchema =  new Schema({
    title:String,
    author:String,
    content:String,
    comments:[{Body:String,date:Date}],
    date:{
        type:Date,default:Date.now()
    },
    hidden:{type:Boolean},
    meta:{
        votes:Number,
        favs:Number
    }
})