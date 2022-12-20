const MongoContainer = require("../../containers/mongo.container");
const {Schema}= require('mongoose')

const collection = "products";
const usersSchema = new Schema({
  name: { type: String },
  description: { type: String },
  price: { type: Number}, 
  image: { type: String },
  id: { type: Number ,unique:true}
});

class ProductsMongoDao extends MongoContainer {
  constructor() {
    super(collection, usersSchema);
  }
}