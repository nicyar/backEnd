
class Api {
    constructor(products) {
        this.products = products;
    }
    async getAll(req, res) {

        try {
            res.send(this.products)
        } catch (error) {
            console.log(error);
        }

    }
    async getById(req, res) {
        try {
            //   let read = await fs.promises.readFile(this.products,'utf-8')
            // let readJson = JSON.parse(read)
            let id = req.params.id
            let num = parseInt(id)
            let back
            const productFound = this.products.find(element => element.id === num)
            if (productFound) {
                back = { productFound }
            } else {
                back = { 'error': 'no se ha encontrado el producto' }
            }
            res.send(back)
        } catch (error) {
            console.log(error)
        }


    }

    async save(req, res) {
        try {
            const { title, price, thumbnail } = req.body;
            let devolver
            if (!title || !price || !thumbnail) {
                devolver = res.status(401).json({ error: "formato incorrecto" })
            } else {
                const product = {
                    id: this.products.length + 1,
                    title,
                    price,
                    thumbnail
                }
                this.products.push(product)
                devolver = res.status(200).json({ agregado: product })
            }
            return devolver
            // let read = await fs.promises.readFile(this.products,'utf-8')

        } catch (error) {
            console.log(error)
        }
    }

    async putById(req, res) {
        try {
            let id = req.params.id;
            const productFound = this.products.findIndex(element => element.id === id)
            if (productFound) {
                let { title, price, thumbnail } = req.body;
                if (title && price && thumbnail) {
                    let product = {
                        id : productFound,
                        title,
                        price,
                        thumbnail
                    }
                    this.products[productFound] = product;
                    res.status(200).json({ "ok": "el producto se ha cambiado correctamente" })
                } else {
                    res.status(401).json({ error: "El formato es incorrecto" })
                }
            } else {
                res.json({ error: "no se ha podido encontrar el producto" })
            }
        } catch (error) {
            res.send(error)
        }
    }

    async deleteById(req, res) {
        try {
            // let contenido = await fs.promises.readFile(this.products,"utf-8")
            //let contendioParseado = JSON.parse(contenido);
            let id = req.params.id;
            const productFound = this.products.findIndex(element => element.id === id)
            if (productFound) {
                //this.products.slice(id-1 ,1); 
                delete this.products[id - 1];
                res.send('eliminado correctamente')
            } else {
                res.json({ "error": "no se ha podido encontrar el producto" })
            }
            // let nuevoContenido = this.products.filter(
            //     (element)=>element.id !== id 
            // );//sobrescribo todo menos el que el usuario haya elegido por id


        } catch (error) {
            console.log(error)
        }
    }


}


module.exports = Api;