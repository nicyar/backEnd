/* Primer Desafio */
// const http = require('http')

// let today = new Date();
 
// let now = today.toLocaleTimeString();



// const server = http.createServer((req,res)=>{
//     res.end('hola primer server')
//     if(parseInt(now)<13){
//         res.end('Buenos dias')
//     }if(parseInt(now)>13){
//         res.end('Buenas Tardes')
//     }if(now>=20){
//         res.end('buenas noches')
//     }
// })



// const connectedServer = server.listen(800,()=>{
//     console.log(`servidor http escuchando el puerto ${connectedServer.address().port}`)
// })

/* Segundo Desafio */
const express = require ('express')
const { Server } = require('http')

const app = express()

const PORT=8080 || process.env.PORT
const server = app.listen(PORT,()=>console.log(`Listening the port ${PORT}`))
server.on('error',error=>console.log(`Error en servidor ${error}`))

app.get('/',(req,res)=>{
    res.send('<h1 style=color:blue>Bienvenidos al servidor express</h1>')
})

app.get('/visitas',(req,res)=>{
    let contador = 0
    
    contador ++
    res.send({visitar:contador})
    
})/* no pude realizar la parte de visitas */

app.get('/fyh',(req,res)=>{
    let today = new Date();
 
// obtener la fecha y la hora
    let now = today.toLocaleString();
    res.send({fyh:now})

})