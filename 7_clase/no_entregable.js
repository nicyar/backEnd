//para realizar una busqueda luego de la ? "clave= valor" y se reciben con req.query

// para recibir un identificador usaremos req.params.id y la ruta /:id

//res.status(200)

/* DESAFIO 1 */

const { query } = require('express');
const express = require ('express');


const PORT = 8080 || process.env.PORT;

const app = express()

const server = app.listen(PORT,()=>{
    console.log(`listening the port ${PORT}`);
})

const frase = 'Hola mundo como estan';

// app.get('/api/frase',(req,res)=>{
//     res.send(frase);
// });

// app.get('/api/letra/:num',(req,res)=>{
//     let num = req.params.num;
//     const range = frase.length
//     if(isNaN(num)){
//         res.json({error:'Usted no ha ingresado un numero'})
//     }
//     else if (num>range) {
//         res.json({error:"ese numero esta fuera del rango"})
//     }else{
//     let letter = frase.charAt(num);
//     res.send(letter)
//     }
// });

// app.get('/api/palabras/:index',(req,res)=>{
//     let index = req.params.index;
//     const words = frase.split(" ")
    
//     if(isNaN(index)){
//         res.json({error:'Usted no ha ingresado un numero'})
//     }
//     else if(index>words.length){
//         res.json({error:"ese numero esta fuera del rango"})
//     }else{
//         const word = words[index]
//         res.send(word) 
//     }
    
// })


/* DESAFIO 2 */

// app.get('/api/sumar/:num1/:num2',(req,res)=>{
//     let num1 = parseInt(req.params.num1);
//     let num2 = parseInt(req.params.num2);

//     let result = num1 + num2;

//     res.send({resultado:result})

// })

// app.get(`/api/sumar`,(req,res)=>{
//     let valor1= req.params.num1
//     let valor2=req.params.num2
//     return res.send({result : Number(valor1)+Number(valor2)})
    
// })

// app.get('api/operacion/:operacion',(req,res)=>{
//     const cuenta = req.params.operacion
//     const numeros = cuenta.split('+')
    
//     return res.send({resultadoSuma: Number(numeros[0])+Number(numeros[1])})

// })

// app.post('/api',(req,res)=>{
//     return res.send(`OK ${req.method}`)
// })



/* DESAFIO 3 */


app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/api/frase',(req,res)=>{
    res.send(frase);
});

app.get('/api/letra/:num',(req,res)=>{
    let num = req.params.num;
    const range = frase.length
    if(isNaN(num)){
        res.json({error:'Usted no ha ingresado un numero'})
    }
    else if (num>range) {
        res.json({error:"ese numero esta fuera del rango"})
    }else{
    let letter = frase.charAt(num-1);
    res.send(letter)
    }
});

app.get('/api/palabras/:index',(req,res)=>{
    let index = req.params.index;
    const words = frase.split(" ")
    
    if(isNaN(index)){
        res.json({error:'Usted no ha ingresado un numero'})
    }
    else if(index>words.length){
        res.json({error:"ese numero esta fuera del rango"})
    }else{
        const word = words[index-1]
        res.send(word) 
    }
    
})

app.post('/api/palabras',(req,res)=>{

    const {palabra} = req.body;
    //const palaString = JSON.stringify(palabra)
    //console.log(palaString)
    const agregada = frase.concat(" "+palabra)
    console.log(agregada)
    const last = agregada.indexOf(palabra);

    res.send({frase: agregada, 
                indexPalabra:last})

})

app.put('/api/palabras/:pos',(req,res)=>{
    let pos = req.params.pos;
    let {palabra}=req.body;
    const palabras = frase.split(' ')
    let reemplazada = palabras[pos-1]
    palabras[pos-1]=palabra
    
    res.send({reemplazada:reemplazada,
                nuevaPalabra:palabra})
    console.log(palabras)
})

app.delete('/api/palabras/:pos',(req,res)=>{
    if(pos = req.params.pos){
        frase.slice(pos,1)
        res.send({OK: 'palabra eliminada correctamente'})
    }else{
        res.send({error:'no se pudo eliminar la palabra'})
    }
})