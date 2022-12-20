const express = require('express');
const {Router} = express;

const app = express();
const router = Router();
const PORT = 8080 || process.env.PORT;

app.use(express.json())
app.use(express.urlencoded({extended:true}))

let Pets = [{"nombre":"polo", "raza": "calle"}]
let people = [{"nombre":"Nicolas" ,"apellido":"Nayar","edad":32 }]

router.get('/personas',(req,res)=>{
    res.send(people)
})
router.get('/mascotas',(req,res)=>{
    res.send(Pets)
})
router.post('/personas',(req,res)=>{
    let {nombre,apellido,edad}= req.body;
    let person={
        "nombre":nombre,
        "apellido":apellido,
        "edad":edad
    }
    people.push(person);
    res.send('persona agregada correctamente la edad es: '+edad)
    
})


const server = app.listen(PORT,()=>{console.log(`listening the port: ${PORT}`)})