const router = require('express').Router() 
const listServices = require('./list.services')

router.route('/')
    .get(listServices.getRegisters)
    .post(listServices.createRegister)
router.route('/:id')
    .get(listServices.getRegister)
    .patch(listServices.patchRegisters)
    .delete(listServices.deleteRegister)
    
module.exports = router