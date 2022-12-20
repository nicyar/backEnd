const express = require("express");
const path = require('path')
const PORT = 8080||process.env.PORT;
const {engine}= require("express-handlebars");
const app = express();
const Products = require('./model/Products')
/* configuracion de la handlebars */

const products = new Products()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))


app.engine('hbs',engine({
        extname:'hbs', //Extension a utilizar
        defaultLayout:'main.hbs', //plantilla principal
        layoutsDir:path.resolve(__dirname+ '/views/layouts'), //ruta a la plantilla princial
        partialsDir:path.resolve(__dirname+'/views/partials/') //rita a las plantillas parciales
    })
)

app.set("views","./views");

app.set("view engine","hbs");//motor de plantilla que se utiliza

app.use('/',express.static(__dirname + '/public'));

app.post('/api/productos',(req,res)=>{
    const {nombre, precio, imagen} = req.body
    const producto ={
        nombre,
        precio,
        imagen
    }
   console.log(products.save(producto));
    res.render('index', {mostrarProductos :true ,products:products.getAll() })
  
})
app.get('/',(req,res)=>{
    res.render('index', {mostrarProductos :true ,products:products.getAll() })//si quiero puedo pasarle datos por aca  (dentro del corchetes : mostrarProductos:true,products:products.getAll())
})

app.listen(PORT,()=>{
    console.log(`servidor escuchando el puerto ${PORT}`)
})