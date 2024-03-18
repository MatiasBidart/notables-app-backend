const db = require('../utils/database');
const {DataTypes} = require('sequelize');

const Users = db.define('users',{
    id:{
        type:DataTypes.UUID,
        primaryKey: true,
        allowNull:false
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'first_name'
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'last_name'
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {isEmail: true}
    },
    password: {
        type:DataTypes.STRING,
        allowNull: false
    },
    role:{
        type: DataTypes.ENUM('normal', 'admin'),
        defaultValue: 'normal',
        allowNull: false
    },
    userStatus:{
        type: DataTypes.ENUM('active', 'disabled'),
        defaultValue: 'disabled',
        allowNull: false,
        field: 'user_status'
    }
},
{timestamps: false}
)
module.exports = Users