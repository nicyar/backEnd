const express = require('express')
const { Server } = require('http')
const Contenedor = require('./archivos')
const fs = require('fs')
const app = express()



const PORT = 8080 || process.env.PORT
const server = app.listen(PORT, () => console.log(`Listening the port ${PORT}`))
server.on('error', error => console.log(`Error en servidor ${error}`))


const archivos = new Contenedor('./productos.txt')

app.get('/',(req,res)=>{
    res.send('<h1 style=color:blue>HOLA DESDE EL INICIO</h1>')
})

app.get('/login',(req,res)=>{
    res.send('Login page')
})

app.get('/products', async (req, res) => {
    const read = await archivos.getAll().then(res=>res)
    res.send(read)  
})//como la funcion que esperemos es async aca tambien lo va a seguir siendo

app.get('/productRandom', async (req,res) => {
    const product = await archivos.getAll()
    const random = Math.floor(Math.random() * product.length)
    /* el floor rendonde y el random numero entre 0 y 1 */
    res.send(product[random])

})

