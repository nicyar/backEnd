const envConfig = require('../config');
const firebaseConfig = require('./firebase/firebase.config.json');

module.exports = {
  file: { // Esta opcion es solo de demostracion
    users: './data/users.json',
    products: './data/products.json'
  },
  mongodb: {
    uri: `mongodb+srv://jorelmaro:${envConfig.DB_PASSWORD}@coder.3c0d1.mongodb.net/?retryWrites=true&w=majority`
  },
  firebase: {
    credentials: firebaseConfig
  },
}