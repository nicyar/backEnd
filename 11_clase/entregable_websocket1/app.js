const express=require('express');
const {Server:HttpServer}= require('http');
const {Server:IOServer}= require('socket.io');
const Chat = require('./api/mensaje.js')
const Productos = require('./api/productos.js')

/* inicializacion */
const PORT= process.env.PORT||8080;
const app = express();
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer)
const apiMensajes = new Chat();
const apiProductos = new Productos();

app.use(express.static('./public'));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

/* app.get('/',(req,res)=>{
    res.sendFile('index.html',{root: __dirname})
}); */
app.post('/productos',(req,res)=>{
    const producto = req.body;
    console.log(apiProductos.guardar(producto));
    res.redirect('/')
})


io.on('connection',(socket)=>{
    console.log('usuario nuevo conectado!!!');
    socket.on("new-message",data=>{
        apiMensajes.guardarMsg(data)
        io.emit('chat-message',apiMensajes.mostrarMsgs());
    });
    io.sockets.emit('products',apiProductos.listarAll())
});


const connectedServer=httpServer.listen(PORT,()=>console.log('server is running in port '+PORT));