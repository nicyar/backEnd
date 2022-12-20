const {faker}= require('@faker-js/faker');
const {v4:uuid}=require('uuid');

faker.locale="es";

const createFakeUser=()=>{
    return{
        id:uuid(),
        name:faker.commerce.product(),
        description:faker.commerce.productDescription(),
        price:faker.commerce.price(100,3000,0),
        image:faker.image.image()
    }
}
module.exports={
    createFakeUser
}