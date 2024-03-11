const Local = require('../models/local.models')
const uuid = require('uuid')

const getAllLocals = async () => {
    const data = await Local.findAll()
    return data
}
const getLocalById = async (id) => {
    const data =await Local.findOne({where: {id}})
    return data
}
const createLocal = async (data) => {
    const newLocal = await Local.create(
        {
            id: uuid.v4(),
            name: data.name
        }
        )
    return newLocal
}
const updateLocal = async (id, data) => {
    const result = await Local.update(data, { where:{id}})
    return result
}
const deleteLocal = async (id) => {
    const data = await Local.destroy({where:{id}})
    return data
}

module.exports = {
    getAllLocals,
    getLocalById,
    createLocal,
    updateLocal,
    deleteLocal
}