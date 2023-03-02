const envConfig = require("./env.config");

module.exports = {
  mongo: {
    uri: envConfig.NODE_ENV === 'production' 
      ? 'mongodb+srv://host-mongo-atlas'
      : 'mongodb://localhost:27017'
  }
};