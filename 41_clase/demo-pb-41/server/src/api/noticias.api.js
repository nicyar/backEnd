const envConfig = require("../config/env.config");
const { getDAOS } = require("../models/daos/daos.factory");
const NoticiasSchema = require("../models/schemas/noticias.schema");
const { STATUS } = require("../utils/api.utils");
const { HTTPError } = require("../utils/errors.utils");

class NoticiasApi {
  constructor() {
    this.noticiasDAO = getDAOS(envConfig.DATA_SOURCE).noticiasDAO;
  }

  async getNoticias() {
    console.log(this.noticiasDAO);
    return await this.noticiasDAO.getNoticiasDAO();
  }

  async getNoticiaById(id) {
    if (!id) {
      throw new HTTPError(STATUS.BAD_REQUEST, 'The id param is a required field');
    }
    const noticia = await this.noticiasDAO.getNoticiaByIdDAO(id);
    if (!noticia) {
      throw new HTTPError(STATUS.NOT_FOUND, 'The noticia does not exist in our records');
    }
    return noticia;
  }

  async createNoticia(noticiaPayload) {
    await NoticiasSchema.validate(noticiaPayload);
    return await this.noticiasDAO.createNoticiaDAO(noticiaPayload);
  }

  async updateNoticia(id, noticiaPayload) {
    if (!id) {
      throw new HTTPError(STATUS.BAD_REQUEST, 'The id param is a required field');
    }
    await NoticiasSchema.validate(noticiaPayload);
    return await this.noticiasDAO.updateNoticiaDAO(id, noticiaPayload);
  }

  async deleteNoticia(id) {
    if (!id) {
      throw new HTTPError(STATUS.BAD_REQUEST, 'The id param is a required field');
    }
    return await this.noticiasDAO.deleteNoticiaDAO(id);
  }
}

module.exports = NoticiasApi;