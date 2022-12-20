const express = require('express');
const { Router } = express
const ApiProd = require('./ApiProd.js');
const admin = require('./middleware');

const router = Router();
const ApiProduct = new ApiProd("./arrayProducts.txt");

router.get('/',(req, res) => {
    return  ApiProduct.getAll(req,res);
});

router.get('/:id',(req, res) => {
    return ApiProduct.getById(req, res);
});
router.post('/', admin,(req, res) => {
    return ApiProduct.save(req, res);
 })
router.put('/:id',admin,(req, res) => {
    return ApiProduct.putById(req, res);
})
router.delete('/:id',admin,(req,res)=>{
    return ApiProduct.deleteByID(req,res);
})

module.exports = router;