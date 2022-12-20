const products = [
  {
    id: 1,
    nombre: 'Escuadra',
    descripcion: 'Escuadra que sirve para escuadrar escuadras dentro de una zona escuadrada',
    precio: 323.45,
    imagen: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Squadra_45.jpg'
  },
  {
    id: 2,
    nombre: 'Calculadora',
    descripcion: 'Te calcula hasta la probabilidad de que tu crush te hable en las proximas 24 horas',
    precio: 234.56,
    imagen: 'https://exitocol.vtexassets.com/arquivos/ids/257195/Calculadora-Cientifica-Graficadora-Texas-Ti-nspire-cxcas-3d.jpg?v=637002371419830000'
  },
  {
    id: 3,
    nombre: 'Globo Terráqueo',
    descripcion: 'Modelo convencional del planeta con vista en alto relieve. Revive todas las verguenzas que has pasado en este planeta como nunca antes!',
    precio: 45.67,
    imagen: 'https://panamericana.vteximg.com.br/arquivos/ids/256800-600-690/globo-terraqueo-politico-40-cm-7701016736787.jpg?v=636381897120030000'
  },
  {
    id: 4,
    nombre: 'Paleta Pintura',
    descripcion: 'Paleta de pintura utilizada por el mismo Picasso, por eso es tan cara!',
    precio: 456.78,
    imagen: 'https://www.botiga.com.uy/media/catalog/product/cache/1/image/600x600/0dc2d03fe217f8c83829496872af24a0/p/a/paleta_pintora_tempera_infantozzi_materiales.jpg'
  },
  {
    id: 5,
    nombre: 'Reloj',
    descripcion: 'Da la hora y la actualiza, que mas quieres saber?',
    precio: 67.89,
    imagen: 'https://us.123rf.com/450wm/monticello/monticello1911/monticello191100379/135078958-reloj-de-pared-aislado-sobre-fondo-blanco-nueve-.jpg?ver=6'
  },
  {
    id: 6,
    nombre: 'Agenda',
    descripcion: 'Escribe esas notas de amor pendientes en tu nueva Agenda y olvidate de lo electronico!',
    precio: 78.90,
    imagen: 'https://cloudfront-eu-central-1.images.arcpublishing.com/prisa/AGYRBXKZQH6C4KYQU6IGD2BDIE.jpg'
  },
  {
    id: 7,
    nombre: 'Escudo caballero templario',
    descripcion: 'Te protege hasta de las vergüenzas que puedas llegar a pasar',
    precio: 456.78,
    imagen: 'https://www.tienda-medieval.com/blog/wp-content/uploads/2010/09/escudo_templario1.jpg'
  },
  {
    id: 8,
    nombre: 'Escorpión de juguete',
    descripcion: 'No es venenoso y si te pica sólo te duele el bolsillo',
    precio: 1000.87,
    imagen: 'https://sc04.alicdn.com/kf/H5794a667d8844b0592a7a76e8724842bt.jpg'
  },
]

class Products {
  static lastProductId = products[products.length - 1].id;
  
  constructor() {
    this.list = products;
  }

  getAll() {
    return this.list;
  }

  getById(productId) {
    return this.list.find(product => product.id === +productId);
  }

  save(producto) {
    const { nombre,  precio, imagen } = producto;/* descripcion, */
    if ( !nombre|| !precio || !imagen) {
      return null;/*  || !descripcion  */
    }
    Products.lastProductId++;
    const newProduct = {
      id: Products.lastProductId,
      nombre,
      precio,
      imagen
    }; /*  descripcion, */
    this.list.push(newProduct);
    return newProduct;
  };

  updateById(productId, product) {
    const productIndex = this.list.findIndex((producto) => producto.id === +productId);
    if (productIndex < 0) return null;
    const {
      nombre,
      descripcion,
      precio,
      imagen
    } = product;
    const updatedProduct = {
      id: this.list[productIndex].id,
      nombre,
      descripcion,
      precio,
      imagen
    };
    this.list[productIndex] = updatedProduct;
    return updatedProduct;
  }

  deleteById(productId) {
    const productIndex = this.list.findIndex((producto) => producto.id === +productId);
    if (productIndex < 0) return null;
    return this.list.splice(productIndex, 1);
  }
}

module.exports = Products;