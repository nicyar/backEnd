const mongoContainer = require('./mongo.container');
const {Schema}= require('mongoose');
const e = require('express');

const collection="users";
const userSchema = new Schema({
    
    nombre:{type:String},
    email:{type:String},
    websites:{type:String},
    image:{type:String},
    stock:{type:Number}
})

class UsersMongoDao extends mongoContainer{
    constructor(){
        super(collection,userSchema)
    }
}