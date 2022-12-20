const express = require('express');
const { Router } = express;
const router = Router();
const ApiCar = require('./ApiCart');
const Api = require('./ApiProd');

const ApiCarts = new ApiCar("./arrayCarts.txt");

router.get('/',(req,res)=>{
    return ApiCarts.getCart(req,res)
});
router.post('/',(req,res)=>{
    return ApiCarts.newCart(req,res)
})

router.delete('/:id',(req,res)=>{
    return ApiCarts.deleteCart(req,res)
})
router.get('/:id/productos',(req,res)=>{
    return ApiCarts.listInCart(req,res)
})
router.post('/:id/productos/:pd',(req,res)=>{
    return ApiCarts.addProduct(req,res)
})

router.delete('/:id/productos/:id_prod',(req,res)=>{
   return ApiCarts.delProductInCart(req,res)
})

module.exports = router;