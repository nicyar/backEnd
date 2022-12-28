const MongoDBContainer = require('../containers/Mongodb.container');
const { HttpError } = require('../../utils/api.utils');
const UserSchema = require('../schemas/User.schema');
const constants = require('../../constants/api.constants');

const collection = 'User';

class UsersDao extends MongoDBContainer {
  constructor() {
    super(collection, UserSchema);
  }

  async createUser(userItem) {
    try {
      const user = await this.save(userItem);
      return user;
    }
    catch(error) {
      if (error.message.toLowerCase().includes('e11000') || error.message.toLowerCase().includes('duplicate')) {
        throw new HttpError(constants.HTTP_STATUS.BAD_REQUEST, 'User with given email already exist');
      }
      throw new HttpError(constants.HTTP_STATUS.INTERNAL_ERROR, error.message, error);
    }

  };

  async getByUsername(username) {
    try {
      const document = await this.model.findOne({ username }, { __v: 0 }).populate('accounts');
      if (!document) {
        const errorMessage = `Wrong username or password`;
        throw new HttpError(constants.HTTP_STATUS.NOT_FOUND, errorMessage);
      }
      return document;
    }
    catch(error) {
      throw new HttpError(constants.HTTP_STATUS.INTERNAL_ERROR, error.message, error);
    }
  }
};

module.exports = UsersDao;