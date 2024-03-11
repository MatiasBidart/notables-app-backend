const db = require('../utils/database');
const {DataTypes} = require('sequelize');
const Pedido = require('../models/pedido.models')
const Product = require('../models/product.models')

const List = db.define('list',{
    id:{
        type:DataTypes.UUID,
        primaryKey: true,
        allowNull:false
    },
    listDate: {
        type: DataTypes.DATEONLY,
        defaultValue: DataTypes.NOW,
        field: 'list_date'
    },
    quantityAsked: {
        type: DataTypes.INTEGER,
        field: 'quantity_asked'
    },
    quantityDelivered: {
        type: DataTypes.INTEGER,
        field: 'quantity_delivered'
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
    pedidoId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'pedido_id',
        references: {
            key: 'id',
            model: Pedido
        }
    }
})

module.exports = List