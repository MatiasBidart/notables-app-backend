const List = require('../models/list.models')
const uuid = require('uuid')

const createRegister = async (data) => {
    const newRegister = await List.create(
        {
            id: uuid.v4(),
            listDate: new Date (),
            quantityAsked: data.quantityAsked,
            productId: data.productId,
            pedidoId: data.pedidoId,
        }
        )
    return newRegister
}
const getRegister = async (id) => {
    const data = await List.findOne({where: {id}})
    return data
}
const getRegisters = async () => {
    const data = await List.findAll()
    return data
}
const patchRegister = async (id, data) => {
    const result = await List.update(data, {where: {id}})
    return result
}
const deleteRegister = async(id) => {
    const data = await List.destroy({where: {id}})
    return data
}
module.exports = {
    createRegister,
    getRegister,
    getRegisters,
    patchRegister,
    deleteRegister
}