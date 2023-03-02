class NoticiasDTO {
  constructor(noticiaItem, _id) {
    Object.assign(this, noticiaItem);
    this.fecha_creacion = noticiaItem.createdAt || new Date().toISOString();
    this.fecha_actualizado = new Date().toISOString();
    if (_id) {
      this._id = _id;
    }
  }
}

module.exports = NoticiasDTO;