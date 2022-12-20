const fs = require('fs')

class Contenedor {
    constructor(name) {
        this.name = name
    }

    async save(product) {
        try {
            let read = await fs.promises.readFile(`./${this.name}`,'utf-8')
            let readJson = JSON.parse(read)
            let amountProducts = readJson.length
            if (amountProducts) {
                product.id = amountProducts + 1
            } else {
                product.id = 1
            }
            let id = product.id
            readJson.push(product)
            await fs.promises.writeFile(`./${this.name}`,JSON.stringify(readJson, null, 2))
            return `el id asignado es: ${id}`
        } catch (error) {
            console.log(error)
        }
    }
    async getById(id) {
        try {
            let read = await fs.promises.readFile(this.name,'utf-8')
            let readJson = JSON.parse(read)
            let num = parseInt(id)
            let back
            const productFound = readJson.find(element => element.id === num)
            if (productFound) {
                back = { productFound }
            } else {
                back = null
            }
            return back
        } catch (error) {
            console.log(error)
        }


    }
    async getAll() {
      
        try {
            let read = await fs.promises.readFile(this.name, 'utf-8')
            let readJson = JSON.parse(read)
            return console.log(readJson)
        } catch (error) {
            console.log(error);
        }
       
    }
    async deleteById(id) {
       try {
        let contenido = await fs.promises.readFile(this.name,"utf-8")
        let contendioParseado = JSON.parse(contenido);
        let nuevoContenido = contendioParseado.filter(
            (element)=>element.id !== id 
        );//sobrescribo todo menos el que el usuario haya elegido por id
        await fs.promises.writeFile(this.name,JSON.stringify(nuevoContenido))
       } catch (error) {
        console.log(error)
       }
    }

    deleteAll() {
        let archivo = this.name;
        async function borrarTodo() {
            try {
                await fs.promises.writeFile(archivo, "");
                console.log("Contenido del archivo borrado");
            }
            catch (err) {
                console.log("No se pudo eliminar el contenido del archivo", err)
            }
        }
        borrarTodo();
    }



}

const prueba = new Contenedor('./products.txt')
prueba.save({"title": "moto",
            "price": 190000,}).then(res=>console.log(res))