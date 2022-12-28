const containerMongoDb=require('../container/containerMongoDb.js');
const UsersSchema = require('../schemas/usersSchemas.js');
const constants = require('../../constants/api.constants.js')



const collection = 'users';

class UsersDao extends containerMongoDb {
    constructor() {
      super(collection, UsersSchema);
}
}

module.exports = UsersDao