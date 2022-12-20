const express = require('express');
const { Router } = express
const ApiProd = require('../api/ApiRest');
const admin = require('../middleware/admin.js')
// const arrayProducts = require('../models/modelProducts')
// const array = [
//     {
//         title: "Mouse",
//         price: 3000,
//         thumbnail: "ninguno",
//         id: 1,
//         timestamp: '13:45:00',
//         description: "muchos dpi",
//         stock: 13,
//     },
//     {
//         title: "teclado",
//         price: 3000,
//         thumbnail: "ninguno",
//         id: 2,
//         timestamp: '13:45:00',
//         description: "muchos dpi",
//         stock: 13,

//     },
//     {
//         title: "joystick",
//         price: 3000,
//         thumbnail: "ninguno",
//         id: 3,
//         timestamp: '13:45:00',
//         description: "muchos dpi",
//         stock: 10,

//     }

// ]

const router = Router();
const ApiRestProduct = new ApiProd("../models/arrayProducts.txt");

router.get('/',(req, res) => {
    return  ApiRestProduct.getAll(req,res)
})

router.get('/:id',admin, (req, res) => {
    return ApiRestProduct.getById(req, res)
   
})
router.post('/:id',admin, (req, res) => {
    return ApiRestProduct.save(req, res)
})
router.put('/:id', admin,(req, res) => {
    return ApiRestProduct.putById(req, res)
})

router.delete('/')

module.exports = router;