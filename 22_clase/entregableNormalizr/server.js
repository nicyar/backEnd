const express = require("express");
const path = require('path')
const PORT = 8080||process.env.PORT;
const {engine}= require("express-handlebars");
const app = express();
const { faker } = require('@faker-js/faker');
const { commerce, image} = faker
const {Server:HttpServer}= require('http');
const {Server:IOServer}= require('socket.io');
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer)
const Api = require("./apiChat");


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

const connectedServer=httpServer.listen(PORT,()=>console.log('server is running in port '+PORT));

app.get('/api/products-test',(req,res)=>{
    const data =[]
    for (let i = 0; i < 5; i++) {
        let name = commerce.productName();
        let price = commerce.price();
        let photo = image.technics(640, 480, true);

        data.push({name: name, price: price, photo: photo})
    }
    res.render("index",{
        productos:data,
        hayProductos:data.length
    });
})
app.post('/mensajes',()=>{
    const mensajes = req.body;
    console.log(Api.save(mensajes))
    res.redirect('/')
})

io.on('connection',(socket )=>{
    console.log('new client')

    //socket.emit('msj',Api.read());

    socket.on('item',item =>{
        console.log(item)
        item.time=new Date().toLocaleString();
        Api.save(item)
        io.sockets.emit("msj",Api.read())
    })


})