const { successResponse, STATUS } = require("../utils/api.utils");
const NoticiasApi = require('../api/noticias.api');

const api = new NoticiasApi();
class NoticiasController {
  constructor() {
    // this.api = new NoticiasApi();
  }

  async getNoticias(req, res, next) {
    try {
      const noticias = await api.getNoticias();
      const response = successResponse(noticias, STATUS.OK);
      return res.status(STATUS.OK).json(response);
    }
    catch(error) {
      next(error);
    }
  }

  async getNoticiaById(req, res, next) {
    const { id } = req.params;
    try {
      const noticia = await api.getNoticiaById(id);
      const response = successResponse(noticia, STATUS.OK);
      return res.status(STATUS.OK).json(response);
    }
    catch(error) {
      next(error);
    }
  }

  async createNoticia(req, res, next) {
    const noticiaPayload = req.body;
    try {
      const newNoticia = await api.createNoticia(noticiaPayload);
      const response = successResponse(newNoticia, STATUS.CREATED);
      return res.status(STATUS.CREATED).json(response);
    }
    catch(error) {
      next(error);
    }
  }

  async updateNoticia(req, res, next) {
    const { id } = req.params;
    const noticiaPayload = req.body;
    try {
      const updatedNoticia = await api.updateNoticia(id, noticiaPayload);
      const response = successResponse(updatedNoticia, STATUS.OK);
      return res.status(STATUS.OK).json(response);
    }
    catch(error) {
      next(error);
    }
  }

  async deleteNoticia(req, res, next) {
    const { id } = req.params;
    try {
      const removedNoticia = await api.deleteNoticia(id);
      const response = successResponse(removedNoticia, STATUS.OK);
      return res.status(STATUS.OK).json(response);
    }
    catch(error) {
      next(error);
    }
  }
}

module.exports = NoticiasController;