const yup = require('yup');
const { STATUS } = require('../../utils/api.utils');
const { HTTPError } = require('../../utils/errors.utils');

class NoticiasSchema {
  static #schema = yup.object({
    titulo: yup.string().required(),
    cuerpo: yup.string().required(),
    autor: yup.string().required(),
    imagen: yup.string(),
    email: yup.string().email().required(),
    vista: yup.boolean().default(false).required(),
  })

  constructor(noticia) {
    Object.assign(this, noticia);
  }

  static async validate(noticiaItem) {
    try {
      return await NoticiasSchema.#schema.validate(noticiaItem);
    }
    catch(error) {
      throw new HTTPError(STATUS.BAD_REQUEST, 'Validation error', error);
    }
   
  }
}

module.exports = NoticiasSchema;