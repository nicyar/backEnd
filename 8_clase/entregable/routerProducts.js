const express = require('express');
const { Router } = express
const ApiRest = require('./ApiRest')
const router = Router();

let products = [
    {
        title: "Mouse",
        price: 3000,
        thumbnail: "ninguno",
        id: 1,
    }, 
];

const Api = new ApiRest(products)


router.get('/', (req, res) => {
    return Api.getAll(req, res)
 })

router.get('/:id', (req, res) => {
    return Api.getById(req, res)
 })

router.post('/', (req, res) => {
    return Api.save(req, res)
 })

router.put("/:id", (req, res) => {
    return Api.putById(req, res)
})

router.delete("/:id", (req, res) => {
    return Api.deleteById(req, res)
})

module.exports=router