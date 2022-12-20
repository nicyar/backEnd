// Archivo de demostracion. NO se utiliza en este proyecto
// Puede que encuentren incoherencias en el. En el afterclass entenderan por qué.

const { Schema } = require('mongoose');
const MongoContainer = require("../../containers/mongo.container");

const collection = "carritos";
const usersSchema = new Schema({
  nombre: { type: String },
  email: { type: String, unique: true }, 
  website: { type: String },
  image: { type: String }
});

class UsersMongoDao extends MongoContainer {
  constructor() {
    super(collection, usersSchema);
  }

  async addProductToCar(idCarrito, idProducto) {
  
    this.model.updateOne({ _id: idCarrito }, {
      $push: {
        productos: [idProducto]
      }
    })
  }
}