const router = require('express').Router() 
const localServices = require('./local.services')

router.route('/')
    .get(localServices.getAllLocals)
    .post(localServices.createLocal)
router.route('/:id')
    .get(localServices.getLocalById)
    .patch(localServices.patchLocal)
    .delete(localServices.deleteLocal)

module.exports = router