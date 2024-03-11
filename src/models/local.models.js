const db = require('../utils/database')
const {DataTypes} = require('sequelize')

const Local = db.define('local', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    }
},
{
    timestamps: false
}
) 
module.exports = Local;