const express = require("express");
const path = require('path')
const { engine } = require("express-handlebars");
const app = express();
const cookieParser = require('cookie-parser')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const env = require('./envConfig');
const {fork}=require('child_process')

const PORT = env.PORT || 8080;
const advanceOptions = { useNewUrlParser: true, useUnifiedTopology: true }

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.use(cookieParser());
app.use(session({
    store: MongoStore.create({
        mongoUrl: 'mongodb://localhost/sessions',
        mongoOptions: advanceOptions
    }),
    secret: 'secretsh',
    resave: false,
    saveUninitialized: false
}))

app.engine('hbs', engine({
    extname: 'hbs',
    defaultLayout: 'main.hbs',
    layoutsDir: path.resolve(__dirname + '/views/layouts'),
    partialsDir: path.resolve(__dirname + '/views/partials/')
})
)

app.set("views", "./views");

app.set("view engine", "hbs");//motor de plantilla que se utiliza

app.use('/', express.static(__dirname + '/public'));

const person = [{ name: "nicolas" }]

app.post('/login', (req, res) => {
    const name = req.body
    console.log(name)
    const exist = person.find(p => p.name == name)
    if (exist) {
        res.redirect('/')
    } else {
        person.push(name)
        req.session.name = name
        res.render("layouts/main", name)
    }
})

app.get("/", (req, res) => {

    if (req.session.name) {
        res.render("layouts/main", { name: req.session.name });
    } else {
        res.redirect('/')
    }
});


app.get('/logout', (req, res) => {

    const name = req.session.name;

    if (name) {
        return req.session.destroy(err => {
            if (!err) {
                return res.render("layouts/main", name)
            }
            return res.send({ error: err })
        })
    } else {
        return res.redirect('/')
    }

})
app.get('/vista', (req, res) => {

    const versionNode = process.version
    const memoria = process.memoryUsage
    const sistema = process.cwd()
    const idProces = process.pid
    const carpeta = process.execPath

res.send({
    versionNode,
    memoria,
    sistema,
    idProces,
    carpeta
})

app.get('/api/random',(req,res)=>{
    const total = fork('./child.js')
    const num = req.query
    total.send(num)
    total.on('contador',(devolver)=>{
        res.json({resultado:devolver})
    })
})

})
app.listen(PORT, () => {
    console.log(`servidor escuchando el puerto ${PORT}`)
})