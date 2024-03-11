const db = require('../utils/database')
const {DataTypes} = require('sequelize');
const Categories = require('./categories.models');
const Product = require('./product.models');

const CategoriesProducts = db.define('categories_products', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    productId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'product_id',
        references: {
            key: 'id',
            model: Product
        }
    },
    categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'category_id',
        references: {
            key: 'id',
            model: Categories
        }
    }
},
{timestamps: false}
) 
module.exports = CategoriesProducts;