const express = require('express')

const ProductosApi = require('./api/productos.js')
const PersonasApi = require('./api/personas.api.js')
const personasApi = new PersonasApi()
const productosApi = new ProductosApi()

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

//--------------------------------------------

app.set('views', './views');
app.set('view engine', 'ejs');

//--------------------------------------------

app.post('/productos', (req, res) => {
    const producto = req.body
    productosApi.guardar(producto)
    res.redirect('/')
})

app.get('/productos', (req, res) => {
    const prods = productosApi.listarAll()

    res.render("vista", {
        productos: prods,
        hayProductos: prods.length
    });
});

app.get('/ejs',(req,res)=>{
    res.render('index',{showSaludo: true, saludo:"hola desde el server"});
})
app.get('/personas',(req,res)=>{
    res.render('index',{personas:personasApi.listarTodos()})
})

app.post('/personas',(req,res)=>{
    personasApi.guardar(req.body);
    res.redirect('/personas')
})/* guardando arreglo de personas */

app.post('/productos', (req, res) => {
    const producto = req.body
    productosApi.guardar(producto)
    res.redirect('/')
})

app.get('/productos', (req, res) => {
    const prods = productosApi.listarAll()

    res.render("vista", {
        productos: prods,
        hayProductos: prods.length
    });
});

//--------------------------------------------
const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})
server.on("error", error => console.log(`Error en servidor ${error}`))
