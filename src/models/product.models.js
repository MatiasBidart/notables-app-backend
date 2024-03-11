const db = require('../utils/database');
const {DataTypes} = require('sequelize');




const Product = db.define('product',{
    id:{
        type:DataTypes.UUID,
        primaryKey: true,
        allowNull:false
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    img: {
        type: DataTypes.TEXT
    }
})

module.exports = Product