const router = require('express').Router() 
const categoriesProductsServices = require('./categoriesProducts.services');

router.route('/')
    .get(categoriesProductsServices.getRegisters)
    .post(categoriesProductsServices.createRegister)
router.route('/:id')
    .get(categoriesProductsServices.getRegister)
    .patch(categoriesProductsServices.patchRegisters)
    .delete(categoriesProductsServices.deleteRegister)
module.exports = router