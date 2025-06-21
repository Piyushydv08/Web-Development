const express = require('express')
const router = express.Router()
const {getProducts, updateProduct, createProducts, deleteProduct} = require('../controllers/productController')

router.get('/products', getProducts)
router.put('/products/:id', updateProduct)
router.post('/products', createProducts)
router.delete('/products/:id', deleteProduct)


module.exports = router