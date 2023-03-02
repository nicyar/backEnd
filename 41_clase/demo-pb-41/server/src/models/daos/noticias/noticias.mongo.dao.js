const { MongoClient, ObjectId } = require("mongodb");
const dbConfig = require("../../../config/db.config");
const NoticiasDTO = require("../../dtos/noticias.dto");

class NoticiasMongoDAO {
  static collection = "noticias";

  constructor(database) {
    MongoClient.connect(dbConfig.mongo.uri)
      .then((connection) => {
        const db = connection.db(database);
        this._collection = db.collection(NoticiasMongoDAO.collection);
        console.log("Connected to ", database);
      })
  }

  async getNoticiasDAO() {
    return await this._collection.find({}).toArray();
  }

  async getNoticiaByIdDAO(id) {
    return await this._collection.findOne({ _id: ObjectId(id) });
  }

  async createNoticiaDAO(noticiaPayload) {
    const newNoticias = new NoticiasDTO(noticiaPayload);
    await this._collection.insertOne(newNoticias);
    return newNoticias;
  }
}

module.exports = NoticiasMongoDAO;