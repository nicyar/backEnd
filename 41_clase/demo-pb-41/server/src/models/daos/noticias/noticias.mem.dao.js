const { v4: uuid } = require('uuid');
const NoticiasDTO = require("../../dtos/noticias.dto");

class NoticiasMemDAO {
  constructor() {
    this.noticias = [];
  }

  async getNoticiasDAO() {
    return this.noticias;
  }

  async getNoticiaByIdDAO(id) {
    const foundNoticia = this.noticias.find((noticia) => noticia.id === id);
    return foundNoticia;
  }

  async createNoticiaDAO(noticiaPayload) {
    const _id = uuid();
    const newNoticia = new NoticiasDTO(noticiaPayload, _id);
  }
}

module.exports = NoticiasMemDAO;