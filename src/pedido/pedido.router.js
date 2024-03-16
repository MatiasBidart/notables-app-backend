const router = require('express').Router() 
const pedidoServices = require('./pedido.services')

router.route('/')
    .get(pedidoServices.getAllPedidos)
    .post(pedidoServices.getPedidoByLocal)
    .post(pedidoServices.createPedido)
    router.route('/:id')
    .get(pedidoServices.getPedidoById)
    .patch(pedidoServices.patchPedido)
    .delete(pedidoServices.deletePedido)
module.exports = router
