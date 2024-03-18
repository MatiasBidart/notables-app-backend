const listControllers = require('../list/list.controller')


const createRegister = (req, res) => {
    const { quantityAsked, quantityDelivered, productId, pedidoId}= req.body;
    if(quantityDelivered, quantityAsked && productId && pedidoId) 
    {
        listControllers.createRegister({
            quantityAsked,       
            quantityDelivered,
            productId,
            pedidoId
        })
        .then(data => {res.status(201).json(data)})
        .catch(err=>{res.status(400).json(err.message)})
    } else {
        res.status(400).json({message: 'Some of this fields is missed',
        fields:
        {
            quantityAsked: 'number',
            quantityDelivered: 'number',
            productId: 'uuid',
            pedidoId: 'uuid'
        }})
    }
}
const getRegister = (req, res) => {
    const id = req.params.id
        listControllers.getRegister(id)
        .then((data) => {res.status(200).json(data)})
        .catch((err) => {res.status(404).json({message: err.message})})
}
const getRegisters = (req, res) => {
        listControllers.getRegisters()
        .then((data) => {res.status(200).json(data)})
        .catch((err) => {res.status(400).json({message: err.message})})
}
const patchRegisters =(req,res)=>{
    const id = req.params.id
    const {listDate, quantityAsked, quantityDelivered, productId, pedidoId, isDelivered} = req.body
    listControllers.patchRegister(id, {
        listDate,
        quantityAsked,
        quantityDelivered,
        productId,
        pedidoId,
        isDelivered
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
    listControllers.deleteRegister(id)
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