const fs = require('fs')

class Api {
    constructor(products) {
        this.products = products;
    }
    async get(req, res) {

        try {
            const data = await fs.promises.readFile(this.products,"utf-8")
            const dataJSON = JSON.parse(data)
            return dataJSON
        } catch (error) {
            console.log(error);
        }

    }
    async getAll(req, res) {
        try {
            const data = await fs.promises.readFile(this.products,"utf-8")
            const dataJSON = JSON.parse(data)
            res.send(dataJSON)
        } catch (error) {
            res.send(error)
        }
    }

    async getById(req, res) {
        try {
            const data = await fs.promises.readFile(this.products,"utf-8")
            const dataJSON = JSON.parse(data)
            let id = req.params.id;
            let num = parseInt(id)
            let back
            const productFound = dataJSON.find(element => element.id === num)
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
            const data = await fs.promises.readFile(this.products,"utf-8")
            const dataJSON = JSON.parse(data)
            const { title, price, thumbnail,description,stock,code } = req.body;
            let devolver
            if (!title || !price || !thumbnail|| !stock || !code|| !description) {
                devolver = res.status(401).json({ error: "formato incorrecto" })
            } else {

                const product = {
                    id: dataJSON.length + 1,
                    title,
                    price,
                    thumbnail,
                    description,
                    code,
                    timestamp:Date.now()
                }
                dataJSON.push(product)
                await fs.promises.writeFile(`./${this.products}`,JSON.stringify(dataJSON, null, 2))
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
            const data = await fs.promises.readFile(this.products,"utf-8")
            const dataJSON = JSON.parse(data)
            let id = req.params.id;
            const productFound = dataJSON.findIndex(element => element.id === id-1)
            if (productFound ) {
                let { title, price, thumbnail,description,stock,code } = req.body;
                if (title&& price&&  thumbnail&& description&& stock&& code) {
                    let product = {
                        id : productFound,
                        title,
                        price,
                        thumbnail,
                        description,
                        code,
                        stock
                    }
                    dataJSON[productFound] = product;
                    res.status(200).json({ "ok": "el producto se ha cambiado correctamente" })
                    
                    await fs.promises.writeFile(this.products,JSON.stringify(dataJSON, null, 2))
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
            const data = await fs.promises.readFile(this.products,"utf-8")
            const dataJSON = JSON.parse(data)

            let id = req.params.id;
            const productFound = dataJSON.findIndex(element => element.id === id)
            if(productFound){
                let delProduct = dataJSON.filter(
                    (element)=>element.id !== id 
                );//sobrescribo todo menos el que el usuario haya elegido por id
                await fs.promises.writeFile(this.name,JSON.stringify(delProduct))
            }else{
                res.send('producto no encontrado')
            }
          
        } catch (error) {
            console.log(error)
        }
    }


}


module.exports = Api;