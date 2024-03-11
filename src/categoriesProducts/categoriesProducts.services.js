const categoriesProductsControllers = require('./categoriesProducts.controllers');

const createRegister = (req,res) => {
    const {productId, categoryId} = req.body
    if (productId && categoryId) {
        categoriesProductsControllers.createRegister({productId, categoryId})
        .then((data)=> {res.status(200).json(data)})
        .catch((err)=> {res.status(400).json({message: err.message})})
    } else {
        res.status(400).json({
            message: 'All fields might be completed',
            fields: {
                productId: "uuid",
                categoryId: "uuid"
            }})
    }
}
const getRegister = (req, res) => {
    const id = req.params.id;
    categoriesProductsControllers.getRegister(id)
    .then((data)=> {res.status(200).json(data)})
    .catch((err)=> {res.status(400).json({message: err.message})})
}
const getRegisters = (req,res) => {
    categoriesProductsControllers.getRegisters()
    .then((data)=> {res.status(200).json(data)})
    .catch((err)=> {res.status(400).json({message: err.message})})
}
const patchRegisters =(req,res)=>{
    const id = req.params.id
    const {productId, categoryId} = req.body
    categoriesProductsControllers.patchRegister(id, {
        productId,
        categoryId
    })
    .then(data =>{
        if(data[0]){
            res.status(200).json({message:`Pedido with ID: ${id}, edited succesfully`, data})
            } else {res.status(404).json({message: 'Invalid ID'})}
    })
    .catch(err => {res.status(400).json({message: err.message})})
}
const deleteRegister = (req, res) => {
    const id = req.params.id
    categoriesProductsControllers.deleteRegister(id)
    .then(data => {
        if(data) {res.status(204).json({message: 'Ok! comander 🆗'})} else {
            res.status(404).json({message:'InvalidID'})
        }
    })
    .catch(err => {res.status(404).json({message: err.message})})
}
module.exports = {
    createRegister,
    getRegister,
    getRegisters,
    patchRegisters,
    deleteRegister

}