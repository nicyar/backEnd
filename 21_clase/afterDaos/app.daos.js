//va a usar aqui las variables de entorno

const envConfig=require('./config');
let ProductsDao;
let UsersDao;

switch(envConfig.DATASOURCE){
    case'mongo':
    ProductsDao=require('products.mongo.dao')
    UsersDao=require(users.mongo.dao)
    break;
    case'firebase':
    ProductsDao=require('products.firebase.dao')
    UsersDao=require('users.firebase.dao')
}

module.exports={
    ProductsDao,
    UsersDao
}