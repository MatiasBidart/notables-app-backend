const Categories = require('../models/categories.models');

const getAllCategories = async() => {
    const data = await Categories.findAll()
    return data
}
const getCategoryById = async(id) => {
    const data = await Categories.findOne({where: {id}})
    return data
}
const createCategory = async(name, description) => {
    const data = await Categories.create({name, description})
    return data
}
const patchCategory = async(data, id) => {
    const response = await Categories.update(data, { where:{id}})
}
const deleteCategory = async(id) => {
    const data = await Categories.destroy({where: {id}})
    return data
}
module.exports = {
    getAllCategories,
    getCategoryById,
    createCategory,
    patchCategory,
    deleteCategory
}