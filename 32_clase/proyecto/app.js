const express = require("express");
const path = require('path')
const PORT = 8080 || process.env.PORT;
const { engine } = require("express-handlebars");
const app = express();
const { faker } = require('@faker-js/faker');
const { commerce, image } = faker
const Users = require("./apiUsers");
// import { db, msgsModel} from "./dbsConfig.js";
const {DB , usersModel} = require('./config/usersConfig')

const Api =  new Users( DB, usersModel);

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.engine('hbs', engine({
    extname: 'hbs', //Extension a utilizar
    defaultLayout: 'main.hbs', //plantilla principal
    layoutsDir: path.resolve(__dirname + '/views/layouts'), //ruta a la plantilla princial
    partialsDir: path.resolve(__dirname + '/views/partials/') //rita a las plantillas parciales
})
)
app.set("views", "./views");

app.set("view engine", "hbs");//motor de plantilla que se utiliza

app.use('/', express.static(__dirname + '/public'));

const server = app.listen(PORT,()=>{console.log(`server is runing in port ${PORT}`)})

app.post('/users',(req,res)=>{
    const users = req.body;
    console.log(Api.save(users));
    res.redirect('/products')
})