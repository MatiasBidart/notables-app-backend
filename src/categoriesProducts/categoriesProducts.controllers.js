const categoriesProducts = require('../models/categoriesProducts.models');
const uuid = require('uuid');

const createRegister = async (data) => {
    const newRegister = await categoriesProducts.create(
        {
            id: uuid.v4(),
            productId: data.productId,
            categoryId: data.categoryId
        }
        )
    return newRegister
}
const getRegister = async (id) => {
    const data = await categoriesProducts.findOne({where: {id}})
    return data
}
const getRegisters = async () => {
    const data = await categoriesProducts.findAll()
    return data
}
const patchRegister = async (id, data) => {
    const result = await categoriesProducts.update(data, {where: {id}})
    return result
}
const deleteRegister = async (id) => {
    const data = await categoriesProducts.destroy({where: {id}})
    return data
}
module.exports = {
    createRegister,
    getRegister,
    getRegisters,
    patchRegister,
    deleteRegister
    
}