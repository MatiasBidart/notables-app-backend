const router = require('express').Router() 
const productServices = require('./product.services')

router.route('/')
    .get(productServices.getAllProducts)
    .post(productServices.createProduct)
router.route('/category/:categoryId')
    .get(productServices.getProductByCategoryId)
router.route('/search/:productName')
    .get(productServices.getProductByName)
router.route('/:id')
    .get(productServices.getProductById)
    .patch(productServices.patchProduct)
    .delete(productServices.deleteProduct)

    
module.exports = router