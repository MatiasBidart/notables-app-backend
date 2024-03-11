const router = require('express').Router() 
const productServices = require('./product.services')

router.route('/')
    .get(productServices.getAllProducts)
    .post(productServices.createProduct)
router.route('/:id')
    .get(productServices.getProductById)
    .patch(productServices.patchProduct)
    .delete(productServices.deleteProduct)
router.route('/search/:productName')
    .get(productServices.getProductByName)
    
module.exports = router