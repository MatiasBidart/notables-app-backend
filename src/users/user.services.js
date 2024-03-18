const userControllers = require('./user.controller')
const getAllUsers =(req,res)=>{
    userControllers.getAllUsers()
    .then((data)=>{res.status(200).json(data)})
    .catch((err)=> {res.status(400).json({message:err.message})})
}
const getUserById = (req,res) =>{
    const id=req.params.id 
    userControllers.getUserById(id)
    .then(data=>{res.status(200).json(data)})
    .catch(err=>{res.status(404).json({message:err.message})})
}
const patchUser =(req,res)=>{
    const id=req.params.id
    const {
        firstName,
        lastName
    } = req.body

    userControllers.updateUser(id, {
        firstName,
        lastName
    })
    .then(data =>{
        if(data[0]){
            res.status(200).json({message:`User with ID: ${id}, edited succesfully`})
        } else {
            res.status(404).json({message: 'Invalid ID'})
        }
    })
    .catch(err => {res.status(400).json({message: err.message})})
}
const deleteUser = (req, res) => {
    const id = req.params.id
    userControllers.deleteUser(id)
    .then(data => {
        if(data !==0){
            res.status(204).json()
        } else {
            res.status(404).json({message:'InvalidID'})
        }
    })
    .catch(err => {res.status(404).json({message: err.message})})
}
const registerUser = (req, res) => {
    const {
        firstName,
        lastName,
        email,
        password,
    }= req.body;

    if(firstName &&lastName && email && password) {
        userControllers.createUser({
            firstName,
            lastName,
            email,
            password
        })
    .then(data => {res.status(201).json(data)})
    .catch(err=>{res.status(400).json(err.message)})
} else {
    res.status(400).json({
        message: 'Allfields must be completed',
        fields: {
            firstName: 'string',
            lastName: 'string',
            email: 'example@expample.com',
            password: 'string',
            }
        })
    }
}
const getMyUser = (req,res) => {
    const id = req.user.id
    userControllers.getUserById(id)
    .then(data=>{res.status(200).json(data)})
    .catch(err => {res.status(400).json({message: err.message})}) 
}
const patchMyUser = (req,res)=> {
    const id = req.user.id;
    const {
        firstName,
        lastName
    } = req.body;

    userControllers.updateUser(id, {
        firstName,
        lastName
    })
    .then(data => {
        res.status(200).json({message: 'Your user was edited succesfully!', data: data})
    })
    .catch(err=>{res.status(400).json({message: err.message})})
}
const deleteMyUser =   (req, res)=> {const id = req.user.id
    userControllers.updateUser(id, {
        userStatus: 'disabled'
    })
    .then (()=> {res.status(200).json({message: 'Your user was disabled succesfully! You have 30 days to reactive or will be deleted definitely'})})
    .catch(err=> {res.status(400).json({message: err.message})})
}

module.exports= {
    getAllUsers,
    getUserById,
    getMyUser,
    patchUser,
    patchMyUser,
    registerUser,
    deleteUser,
    deleteMyUser
}