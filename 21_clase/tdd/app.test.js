const { request } = require("express")
const app = require('./app')

describe("definicion caso de prueba, api rest test",()=>{

    test("return status 22 and hello bb",async ()=>{
        const response =await request(app).get('/')
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe("hello bb")
    })
    
})

// test | it metodos si pongo assert quels tengo que poner el resultado en mi primer paramtro

