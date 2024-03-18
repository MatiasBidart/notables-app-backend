const Users = require('../models/user.models') 
const {hashPassword}= require('../utils/crypto')
const uuid = require('uuid')

// Get's diabled 🎈
const getAllUsers = async () => {
    const data = await Users.findAll({where: {userStatus: 'disabled'}})
    return data
}
const getUserById = async (id) => {
    const data =await Users.findOne({where: {id : id, userStatus: 'disabled'}})
    return data
}
const createUser = async (data) => {
    const newUser = await Users.create({
        id:uuid.v4(),
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: hashPassword(data.password)
    })
return newUser
}
const updateUser = async (id, data) =>{
    const result = await Users.update(data, { where:{id}})
    return result
}
const deleteUser = async (id) => {
    const data = await Users.destroy({where:{id}})
    return data
}
const getUserByEmail = async(email) => {
    const data = await Users.findOne({where: {email: email, userStatus: 'disabled'}})
    return data
} 

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    getUserByEmail,
    updateUser,
    deleteUser
}