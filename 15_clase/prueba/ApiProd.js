const fs = require('fs')

class Api {
    constructor(products) {
        this.products = products;
    }
    async get(req, res) {

        try {
            const data = await fs.promises.readFile(this.products, "utf-8")
            const dataJSON = JSON.parse(data)
            return dataJSON
        } catch (error) {
            console.log(error);
        }

    }
    async getAll(req, res) {
        try {
            const data = await fs.promises.readFile(this.products, "utf-8")
            const dataJSON = data ? JSON.parse(data) : [];
            res.send(dataJSON)
        } catch (error) {
            res.send(error)
        }
    }
    async getById(req, res) {
        try {
            const dataJSON = await this.get()
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
            res.status(401).send({ "ERROR": error })
        }
    }
    async save(req, res) {
        try {
            const data = await fs.promises.readFile(this.products, "utf-8")
            const dataJSON = JSON.parse(data)
            const { title, price, thumbnail, description, stock, code } = req.body;
            let devolver
            if (!title || !price || !thumbnail || !stock || !code || !description) {
                devolver = res.status(401).json({ error: "formato incorrecto" })
            } else {

                const product = {
                    id: dataJSON.length + 1,
                    title,
                    price,
                    thumbnail,
                    description,
                    code,
                    timestamp: new Date().toLocaleDateString()
                }
                dataJSON.push(product)
                await fs.promises.writeFile(`./${this.products}`, JSON.stringify(dataJSON, null, 2))
                devolver = res.status(200).json({ agregado: product })

            }
            return devolver
            // let read = await fs.promises.readFile(this.products,'utf-8')

        } catch (error) {
            console.log(error)
        }
    }
   async putById(req,res){
    const dataJSON = await this.get();
    const id = req.params.id
    const newProd = req.body
    const index = dataJSON.find(elem=>elem.id === id)
    const ind = dataJSON.indexOf(index)
    try{
        
        dataJSON[ind]=newProd,newProd.id = id;        
        await fs.promises.writeFile(this.products, JSON.stringify(dataJSON, null, 2))
        return res.send('cambiado perfectamente')
    }catch(e){
        res.send(e)
    }

   }
   //no agregue verificaciones por que no me funciona de ninguna manera

   async deleteByID(req,res){
   
   
    try {
        let contenido = await fs.promises.readFile(this.products,"utf-8")
        let contendioParseado = JSON.parse(contenido);
        const prodIndex = contendioParseado.findIndex(elem => elem.id === Number(req.params.id));
        const newProducts = contendioParseado;
        newProducts.splice(prodIndex, 1);

        await fs.promises.writeFile(this.products,JSON.stringify(newProducts, null, 2))
        res.send('producto eleminado')
       } catch (error) {
        console.log(error)
       }
    }
    // try {
    //     const data = await fs.promises.readFile(this.products, "utf-8")
    //     const dataJSON = JSON.parse(data)
    //     const idDelete = req.params.id;
    //     let match =dataJSON.find(item=> item.id === idDelete)
    //     if (!match) {
    //         res.send('producto no encontrado')
    //     } else {
    //         let toDelete = dataJSON.indexOf(match)
    //         dataJSON.splice(toDelete,1)
    //         await fs.promises.writeFile(this.products,JSON.stringify(dataJSON))
    //         return res.send('producto eliminado')
    //     }
    
    // } catch (error) {
    //     console.log(error)
    // }
}

module.exports = Api;