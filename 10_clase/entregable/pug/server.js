const express = require('express')


const ProductosApi = require('./api/productos')

const productosApi = new ProductosApi()

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.set('views','./views');
app.set('view engine','pug');

app.get('/hello',(req,res)=>{
    res.render('main',{mensaje:'Mostrando este mensaje desde a express a pug'})
})//siemrpe despues del render hay que referencia a la plantilla que tiene el main osea el mensaje que mandamos al index

app.get('/datos',(req,res)=>{
    res.render('main',req.query)
})//Aca en el req.query voy a referenciar el min max y el value 

app.post('/productos', (req, res) => {
    const producto = req.body
    productosApi.guardar(producto)
    res.redirect('/')
})//ya llega el producto del req.body como un objeto y luego de ahi pasa a la api

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
