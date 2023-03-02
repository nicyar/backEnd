const NoticiasMemDAO = require('./noticias/noticias.mem.dao');
const NoticiasMongoDAO = require('./noticias/noticias.mongo.dao');

const getDAOS = (type) => {
  let noticiasDAO;
  switch(type.toLowerCase()) {
    case 'mem': 
      noticiasDAO = new NoticiasMemDAO();
      break;
    case 'mongo': 
      console.log("AQUI");
      noticiasDAO = new NoticiasMongoDAO("noticiasdb");
      break;
    default:
      throw new Error("Invalid data source");
  }
  return {
    noticiasDAO,
  }
}

module.exports = {
  getDAOS,
}