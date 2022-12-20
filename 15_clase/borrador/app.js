const express = require('express');
const { Router } = express

const routerProducts = require('./router/routerProduts.js')

const app = express()
const router = Router()

const PORT = process.env.port||8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('/public'));

app.use('/api/products', routerProducts);

const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
 })
server.on("error", error => console.log(`Error en servidor ${error}`));

