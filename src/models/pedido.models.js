const db = require('../utils/database');
const {DataTypes} = require('sequelize') ;
const Local = require('./local.models');

const Pedido = db.define('pedido',{
    id:{
        type:DataTypes.UUID, 
        primaryKey: true,
        allowNull:false
    },
    localId: {
        type: DataTypes.UUID,
        field: 'local_id',
        references: {
            key: 'id',
            model: Local
        }
    },
    date: {
        type: DataTypes.DATEONLY,
        defaultValue: DataTypes.NOW,
        allowNull: false
    },
    isCompleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        field: 'is_completed',
        allowNull:false
    },
    startedAt: {
        // A modificar
        type: DataTypes.STRING
    },
    isDeveloped: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        field: 'is_developed',
        allowNull:false
    }
    
})

module.exports = Pedido