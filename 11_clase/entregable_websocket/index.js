const express = require('express');
const { Server: HttpServer } = require("http");
const { Server: SocketServer } = require("socket.io");
const Products = require('./data/data');
const { formatMessage } = require("./utils/utils.js");


const app = express();
const PORT = process.env.PORT || 8080;
const httpServer = new HttpServer(app);
const io = new SocketServer(httpServer);
const productos = new Products();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

//Listen
httpServer.listen(PORT, () =>{
    console.log('listening on port ' + PORT);    
});

const messages = [];
const users = [];

io.on('connection',(socket) =>{
    console.log("New Client Conection");

    console.log(socket.id);

    socket.emit('products', productos.getAll());

    socket.on('newProduct', (newProduct) =>{
        productos.save(newProduct);
        io.sockets.emit('products', productos.getAll());        
    });       

    io.emit("message", [...messages]);

    socket.on('newUser', (username) =>{
        const newUser = {
            id: socket.id,
            username: username,
        }
        users.push(newUser);
    });

    socket.on("newMessage", (data) =>{
        const user = users.find(user => user.id === socket.id);
        const newMessage = formatMessage(socket.id, user.username, data);
        messages.push(newMessage);
        io.emit('chatMessage', newMessage);
    });

    socket.on("disconnect", () => {
        io.emit("userDisconnected", `${socket.id}`);        
    });
});