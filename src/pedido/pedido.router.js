const router = require('express').Router() 
const pedidoServices = require('./pedido.services')

router.route('/')
    .get(pedidoServices.getAllPedidos)
    .post(pedidoServices.createPedido)
    router.route('/local')
    .post(pedidoServices.getPedidoByLocal)
    router.route('/:id')
    .get(pedidoServices.getPedidoById)
    .patch(pedidoServices.patchPedido)
    .delete(pedidoServices.deletePedido)
    
module.exports = router
