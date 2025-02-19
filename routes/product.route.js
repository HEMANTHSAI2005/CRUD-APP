const express = require('express')
const router = express.Router()
const Product = require('../models/product.model.js');
const productController = require('../controller/product.controller.js');
const {getProducts, getProduct, updateProduct, deleteProduct, createProduct} = require('../controller/product.controller.js')

router.get('/',getProducts);

router.get('/:id',getProduct);

router.put('/:id',updateProduct);

router.delete('/:id',deleteProduct);

router.post('/',createProduct);


module.exports = router