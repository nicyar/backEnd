// Archivo de demostracion. NO se utiliza en este proyecto
// Puede que encuentren incoherencias en el. En el afterclass entenderan por qué.

const { Schema } = require('mongoose');
const MongoContainer = require("../../containers/mongo.container");

const collection = "products";
const usersSchema = new Schema({
  titulo: { type: String },
  precio: { type: Number}, 
  imageUrl: { type: String },
  stock: { type: Number }
});

class ProductsMongoDao extends MongoContainer {
  constructor() {
    super(collection, usersSchema);
  }
}