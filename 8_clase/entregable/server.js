const express = require('express');
const { Router } = express
const ApiRest = require('./ApiRest')
const routerProducts = require('./routerProducts')

const app = express()
const router = Router()

const PORT = 8080;

const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
 })
server.on("error", error => console.log(`Error en servidor ${error}`));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/',express.static(__dirname + '/public'));


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.use('/api/products', routerProducts);

