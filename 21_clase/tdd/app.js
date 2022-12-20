const express =require('express');
const app = express();

app.get('/',(req,res)=>{
    res.status(200).send("hello bb")
})


module.exports=app;