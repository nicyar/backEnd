
const fs = require('fs')
const otra = require('./ApiProd');
const otraclas = new otra ()
class Cart {
    constructor(cart) {

        this.cart = cart;
    }
    async getCart(req,res){
        try {
            const data =await fs.promises.readFile(this.cart,"utf-8")
            const dataJSON =JSON.parse(data)
            return dataJSON;
            res.send(dataJSON)
            
        } catch (error) {
            res.send(error)
        }
    }
    async newCart(req, res) {

        try {
            const data = await fs.promises.readFile(this.cart, "utf-8");
            const dataJSON = JSON.parse(data);
            /* por que si pusheo una variable con esos datos no me crea el carrito ? */
            dataJSON.push({ id: dataJSON.length + 1,
                timestamp: Date.now(),
                product: []});
            await fs.promises.writeFile(this.cart, JSON.stringify(dataJSON, null, 2))
            return res.send('id del carrito: ')
        } catch (error) {
            console.log(error)
        }
        
    }

    async deleteCart(req, res) {
        try {
            let contenido = await fs.promises.readFile(this.cart,"utf-8")
            let contendioParseado = JSON.parse(contenido);
            const prodIndex = contendioParseado.findIndex(elem => elem.id === Number(req.params.id));
            const newProducts = contendioParseado;
            newProducts.splice(prodIndex, 1);
    
            await fs.promises.writeFile(this.cart,JSON.stringify(newProducts, null, 2))
            res.send('producto eleminado')
           } catch (error) {
            console.log(error)
           }
        }
    //   try {
        
    //     const data = await fs.promises.readFile(this.cart, "utf-8");
    //     const dataJSON = JSON.parse(data);
    //     const delIndex = dataJSON.find(num => num.id == req.params.id);
    //     if(delIndex){
    //     const copiaData = dataJSON;
    //     const dell = copiaData.indexOf(delIndex)
    //     copiaData.slice(dell,1);
    //     await fs.promises.writeFile(this.cart,JSON.stringify(copiaData, null, 2))
    //     res.send('carrito eliminado')}
    //     else{
    //         res.send('producto no encontrado')
    //     }
    //     //no me elimina el carrito :__( intente con el findindex y tampoco
    //   } catch (error) {
    //     console.log(error)
    //     res.send({fallo:error})
    //   }
    //}

    async listInCart(req,res){
        try {
            const data = await fs.promises.readFile(this.cart, "utf-8");
            const dataJSON = JSON.parse(data);
            const id = req.params.id;

            const elemn = dataJSON.find(elem => elem.id == id )
            const productos = elemn.producto;
            res.send(productos)

        } catch (error) {
            console.log(error)
        }
    }
    // async addProduct(req,res){
    //     try {
            
    //         const data = await fs.promises.readFile(this.cart, "utf-8");
    //         const dataJSON = JSON.parse(data);
    //         const id = req.params.id;
    //         const elemn = dataJSON.find(elem => elem.id == id )
    //         const productos = elemn.producto;
            

    //         const dataProd = await fs.promises.readFile("./arrayProducts","utf-8");
    //         const dataProdJSON= JSON.parse(dataProd);
    //         const pd = req.params.pd;
    //         const productFound = dataProdJSON.find(element => element.id == pd )
            
    //         if (productFound) {
    //             productos.push(productFound)
    //             dataJSON.push(productos)
    //             await fs.promises.writeFile(this.cart,JSON.stringify(dataJSON, null, 2))
    //             res.send('producto agregado')
    //         }else{
    //             res.send('producto no encontrado')
    //         }

    //     } catch (error) {
    //         console.log(error)
    //         res.send(error)
    //     }
    // }
    async delProductInCart(req,res){
        try {
            const data = await fs.promises.readFile(this.cart, "utf-8");
            const dataJSON = JSON.parse(data);
            const id = req.params.id;
            const id_prod = req.params.id_prod;
            const elemn = dataJSON.find(elem => elem.id == id )
            const productos = elemn.producto;
            const del = productos.find(elem => elem.id == id_prod)
            const borrado = dataJSON.slice(productos.del,1);
            if(borrado){ await fs.promises.writeFile(this.cart,JSON.stringify(dataJSON, null, 2))
            res.send("producto eliminado");}
           else{
            res.send('no se pudo eliminar el producto')
           }

        } catch (error) {
            console.log(error)
        }
    }


   

}

module.exports = Cart;