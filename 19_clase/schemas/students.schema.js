const mongoose=require('mongoose');
const studentCollection="estudiantes";
const {Schema}=mongoose; 

const StudentSchema = new Schema({
    nombre:{type:String,required:true},
    apellido:{type:String, required:true},
    age:{type:Number, required:true},
    dni:{type:String, required:true, unique:true},
    curso:{type:String, required:true},
    nota:{type:Number, required:true},

})

const StudentModel= mongoose.model(studentCollection,StudentSchema)
module.exports= StudentModel;