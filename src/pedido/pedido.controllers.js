const Pedido = require('../models/pedido.models');
const List = require('../models/list.models');
const Product = require('../models/product.models');
const uuid = require('uuid');

const getAllPedidos = async (offset, limit) => {
    const data = await Pedido.findAndCountAll({
        // next:`${urlBase}?offset=${offset+limit}&limit=${limit}`,
        // prev:`${urlBase}`,
        offset,
        limit,
        // results: data
    })
    return data
}
const getPedidoById = async (id) => {
    const data =await Pedido.findOne({
        where: {id},
        attributes: {exclude: ['createdAt', 'updatedAt']},
        include: [
            {
                model: List,
                as: 'lists',
                where: {pedidoId: id},
                attributes: [
                    'quantityAsked',
                    'quantityDelivered'
                ],
                include: [{
                    model: Product,
                    attributes: [
                        "name",
                        "stock",
                        "img"
                    ]
                }]
            },
        ]
    })
    return data
}
const getPedidoByLocal = async (localId, date) => {
    const data =await Pedido.findOne({where: {localId, date}})
    return data
}
const createPedido = async (data) => {
    const newPedido ={
            id: uuid.v4(),
            localId: data.localId,
            date: new Date(),
            startedAt: data.startedAt,
        }
    const result = await Pedido.create(newPedido)
    return result
}

const updatePedido = async (id, data) => {
    const result = await Pedido.update(data, { where:{id}})
    return result
}
const deletePedido = async (id) => {
    const data = await Pedido.destroy({where:{id}})
    return data
}


module.exports = {
    getAllPedidos,
    getPedidoById,
    getPedidoByLocal,
    createPedido,
    updatePedido,
    deletePedido
}