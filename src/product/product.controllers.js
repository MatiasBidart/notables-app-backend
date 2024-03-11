const Product = require('../models/product.models');
const CategoriesProducts = require('../models/categoriesProducts.models');
const Categories = require('../models/categories.models')
const uuid = require('uuid')

const getAllProducts = async () => {
    const data = await Product.findAll({
        include: [
            {
                model: CategoriesProducts,
                as: 'categories_products',
                include: [{ model: Categories }]
            }
        ]
    })
    return data
}
const getProductById = async (id) => {
    const data =await Product.findOne({
        where: {id},
        attributes: {exclude: ['createdAt', 'updatedAt']},
    include: [
        {
            model: CategoriesProducts,
            as: 'categories_products',
            attributes: {exclude: ['id', 'productId']},
            include: [
                {
                    model: Categories,
                    attributes: ["name"]
                }
            ]
        }
    ]})
    return data
}
const getProductByName = async (name) => {
    const data =await Product.findOne({where: {name : name}})
    return data
}
const createProduct = async (data) => {
    const newProduct = await Product.create(
        {
            id: uuid.v4(),
            name: data.name,
            stock: data.stock,
            img: data.img
        }
        )
    return newProduct
}
const updateProduct = async (id, data) => {
    const result = await Product.update(data, { where:{id}})
    return result
}
const deleteProduct = async (id) => {
    const data = await Users.destroy({where:{id}})
    return data
}

module.exports = {
    getAllProducts,
    getProductById,
    getProductByName,
    createProduct,
    updateProduct,
    deleteProduct
}