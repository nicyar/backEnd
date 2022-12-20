/* primero cree la base */
use ecommerce
// use productos
// use mensajes
/* luego probe insertar algun documento */
db.productos.insert({name:"1producto",stock:1,description:"description products1"})
/* despues hice lo mismo  */
db.mensajes.insert({mensaje:"mensaje de prueba",username:"nico@hotmail",id:1})

db.productos.insertMany([{
    id: 1,
    timestamp: "Sat, 08 Oct 2022 21:41:27 GMT",
    nombre: "bici",
    descripcion: "rodado 29",
    codigo: 2,
    foto: "https://psd/o/portada.png",
    precio: 5000,
    stock: 10
  },
  {
    id: 2,
    timestamp: "Sat, 08 Oct 2022 21:41:27 GMT",
    nombre: "rueda",
    descripcion: "rodado 28",
    codigo: 22,
    foto: "https://pRuEDA/o/portada.png",
    precio: 3000,
    stock: 20
  },
  {
    id: 3,
    timestamp: "Sat, 08 Oct 2022 21:41:27 GMT",
    nombre: "manubrio",
    descripcion: "playero",
    codigo: 34,
    foto: "https://pff/o/portada.png",
    precio: 350,
    stock:4
  },
  {
    id: 4,
    timestamp: "Sat, 08 Oct 2022 21:41:27 GMT",
    nombre: "silla",
    descripcion: "superComoda",
    codigo: 3,
    foto: "https://phhh/o/portada.png",
    precio:2000,
    stock: 60
  },
  {
    id: 5,
    timestamp: "Sat, 08 Oct 2022 21:41:27 GMT",
    nombre: "destornillador",
    descripcion: "chato",
    codigo: 43,
    foto: "https://pgg/o/portada.png",
    precio: 177,
    stock: 200
  },
  {
    id: 6,
    timestamp: "Sat, 08 Oct 2022 21:41:27 GMT",
    nombre: "pedal",
    descripcion: "de oro",
    codigo: 88,
    foto: "https://p/4reo/portada.png",
    precio: 3999,
    stock: 88
  },
  {
    id: 7,
    timestamp: "Sat, 08 Oct 2022 21:41:27 GMT",
    nombre: "cadena",
    descripcion: "aceitada",
    codigo: 98,
    foto: "https://p/o/sdfgbportada.png",
    precio: 2440,
    stock: 77
  },
  {
    id: 8,
    timestamp: "Sat, 08 Oct 2022 21:41:27 GMT",
    nombre: "freno",
    descripcion: "super freno",
    codigo: 1000,
    foto: "https://p/osfdg/portada.png",
    precio: 766,
    stock: 66
  },{
    id: 9,
    timestamp: "Sat, 08 Oct 2022 21:41:27 GMT",
    nombre: "luz trasera",
    descripcion: "encandilante",
    codigo: 300,
    foto: "https://p/osdfgc/portada.png",
    precio: 1080,
    stock: 55
  },{
    id: 10,
    timestamp: "Sat, 08 Oct 2022 21:41:27 GMT",
    nombre: "luz delantera",
    descripcion: "rodado 29",
    codigo: 25,
    foto: "https://psdf/go/portada.png",
    precio: 400,
    stock: 44
  }])

db.mensajes.insertMany([{
    
        nombre: "Nicolas@gmsgi",
        mensaje: "hola ",
        hora: "6/10/2022 12:10:38"
      },
      {
        nombre: "matias@gmsgi",
        mensaje: "hola, como estas?",
        hora: "6/10/2022 12:10:58"
      },
      {
        nombre: "Nicolas@gmsgi",
        mensaje: "bien vos ?",
        hora: "6/10/2022 12:10:58"
      },
      {
        nombre: "matias@gmsgi",
        mensaje: "bien, que cuentas tanto tiempo",
        hora: "6/10/2022 12:10:58"
      },
      {
        nombre: "matias@gmsgi",
        mensaje: "nada aca simulando una conversacion",
        hora: "6/10/2022 12:10:58"
      },
      {
        nombre: "Nicolas@gmsgi",
        mensaje: "para que",
        hora: "6/10/2022 12:11:46"
      },
      {
        nombre: "matias@gmsgi",
        mensaje: "para aprobar el entregable",
        hora: "6/10/2022 12:11:46"
      },
      {
        nombre: "Nicolas@gmsgi",
        mensaje: "que entregbale",
        hora: "6/10/2022 12:11:46"
      },{
        nombre: "matias@gmsgi",
        mensaje: "el de coder xd",
        hora: "6/10/2022 12:11:46"
      },
      {
        nombre: "Nicolas@gmsgi",
        mensaje: "suerte amigo jajaj",
        hora: "6/10/2022 12:11:46"
      }
])
//aca en el insert tambien podria declarar un array afuera y usarlo dentro del insertMany asi insertMany([{array}])


/* listando los documentos */

db.mensajes.find()

db.productos.find()

/*mostrando el tamaño  */
db.mensajes.storageSize() /* =36864 */
db.productos.storageSize()/* =20480 */

/* CRUD */
/* punto a */
db.productos.insertOne({
    id: 11,
    timestamp: "Sat, 08 Oct 2022 21:41:27 GMT",
    nombre: "bici",
    descripcion: "rodado 29",
    codigo: 2,
    foto: "https://psd/o/portada.png",
    precio: 5000,
    stock: 10
  
})

/* punto b */
/* i */

db.productos.find({
    "precio":{$lt:1000}
})


/* ii */
// db.productos.find({"precio":{$in:[1000,3000]}})
// db.productos.find({ $and: [{price: {$gte: 1000}}, {price: {$lte: 3000}}]})

/* iii */
db.productos.find({
    "precio":{$gt:3000}
})

/* iv */
db.productos.find({},{"nombre":1}).sort({"precio":1}).skip(3).limit(1)

/* c */
db.productos.updateMany({stock:{$gt:0}},{$set:{"stock":100}})

/* d */
db.productos.updateMany({precio: {$gt: 4000}}, {$set: {stock: 0}})

/* e */

db.productos.deleteMany({precio: {$lt:1000}})


db.createUser(
    {
        user: "pepe",
        pwd: "asd456",
        roles: [
            { role: "read", db: "productos"}
        ]
    }
)

// haciendolo me di cuenta de que estaba creando dos base de datos para mensajes y productos en ves de crear colecciones 