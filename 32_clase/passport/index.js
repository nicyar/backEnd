const express = require('express')
const os = require('os');
// const cluster = require('cluster');
const session = require('express-session');
const cokieParser = require('cookie-parser')
const MongoStore = require('connect-mongo');
const cookieParser = require('cookie-parser');
const path = require('path');
const MongoContainer = require('./modals/container/containerMongoDb.js')
const mongoose = require('mongoose')
const {User} = require('./modals/schemas/usersSchemas')
const {engine}= require("express-handlebars");
const { faker } = require('@faker-js/faker');
const { commerce, image} = faker

// const ApiUsers = new Api ();
const user = new User()

const app = express();
const PORT = process.env.PORT || 8080;
// const PORT = process.argv[2] || 8080;
// const modo = process.argv[3];

const users = [{ username: "nicolas", password: "123" }]

app.listen(PORT,async()=>{
    
    mongoose.set('strictQuery', false);
    MongoContainer.connect()
    
    .then(()=>{
    
        console.log('connected to DB')
        console.log(`servidor escuchando el puerto:${PORT}`)
    
    })
    
})

app.engine('hbs',engine({
    extname:'hbs', //Extension a utilizar
    defaultLayout:'main.hbs', //plantilla principal
    layoutsDir:path.resolve(__dirname+ '/views/layouts'), //ruta a la plantilla princial
    partialsDir:path.resolve(__dirname+'/views/partials/') //rita a las plantillas parciales
})
)

app.set("views","./views");

app.set("view engine","hbs");//motor de plantilla que se utiliza


app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./public'));

app.use(session({
    store: MongoStore.create({ mongoUrl: 'mongodb+srv://demo32:nicolas123@cluster0.tyb06ty.mongodb.net/demo?retryWrites=true&w=majority'}),
    secret: 'top-secret-51',
    resave: false,
    saveUninitialized: false,
}));

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html');
})

app.post('/login',async (req,res)=>{
    const {username,password}=req.body;
    const newUser= {username,password}
    try {
        const guardar = user.save(newUser)
        req.session.user = guardar
        console.log('usuario guardado con exito')
    } catch (error) {
        console.log(error)
    }
    
})
//aca podria validar que el usuario este conectado para mostrarle los productos
app.get('/api/products-test',(req,res)=>{
    const data =[]
    for (let i = 0; i < 10; i++) {
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
app.get('/info', (req, res) => {
    const workers = os.cpus().length
    res.send(`numeros de procesadores ${workers} --${PORT}`)
})



// if (modo === 'CLUSTER' && cluster.isPrimary) {
//     const cpus = os.cpus.length;
//     for (let i = 0; i < cpus; i++) {
//         cluster.fork();
//     }
//     console.log(process.pid, cpus)
//     cluster.on('exit', (worker, code) => {
//         console.log('worker', worker.process.pid, 'exit - ', new Date().toLocaleString());
//         cluster.fork() //si se cae el proceso se vuelve a crear automaticamente
//     })
// } else {
//     const running = app.listen(PORT, () => {
//         console.log(`${process.pid} => server is runing in ${PORT} in mod FORK`);
//     })
// }

