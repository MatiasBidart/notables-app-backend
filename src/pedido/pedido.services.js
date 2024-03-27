const pedidoControllers = require('./pedido.controllers')
const {host} = require('../config')


const getAllPedidos =(req,res)=>{
//  localhost:9000/api/v1/posts?offset=0&limit=2
    const offset = Number(req.query.offset) || 0;
    const limit = Number(req.query.limit) || 10; 
    const urlBase = `${host}/api/v1/pedido`
    
    pedidoControllers.getAllPedidos(offset, limit)
    .then((data)=>{
        const nextPage = data.count - offset >= limit ? `${urlBase}?offset=${offset + limit}&limit=${limit}` : null
        const prevPage = offset - limit >= 0 ? `${urlBase}?offset=${offset-limit}&limit=${limit}`: null
        res.status(200).json({
            next: nextPage,
            prev: prevPage,
            items: data.count,
            offset,
            limit,
            results: data.rows
        })
    })
    .catch((err)=> {res.status(400).json({message:err.message})})
}
const getPedidoById = (req,res) =>{
    const id = req.params.id
    pedidoControllers.getPedidoById(id)
    .then(data=>{res.status(200).json(data)})
    .catch(err=>{res.status(404).json({message:err.message})})
}
const getPedidoByLocal = (req,res) =>{
    const localId = req.body.localId
    const date = req.body.date
    
    if(localId && date){
        pedidoControllers.getPedidoByLocal(localId, date)
        .then(data=>{res.status(200).json(data)})
        .catch(err=>{res.status(404).json({message:err.message})})
    } else {
        res.status(400).json({message:'Error: Missing Data',
        description: 'Is mandatory to have the following data:{localId, date}'})
    }
}
const getPedidoDataByCategory = (req,res) =>{
    const categoryId = req.params.categoryId
    const id = req.params.id
    
    if(id && categoryId){
        pedidoControllers.getPedidoDataByCategory(categoryId, id)
        .then(data=>{res.status(200).json(data)})
        .catch(err=>{res.status(404).json({message:err.message})})
    } else {
        res.status(400).json({message:'Error: Missing Data',
        description: 'Is mandatory to have the following data:{categoryId, id}'})
    }
}
const patchPedido =(req,res)=>{
    const id = req.params.id
    const {localId, isCompleted, startedAt, isDelevoped} = req.body
    
    if( localId || isCompleted || startedAt || isDelevoped) {
        pedidoControllers.updatePedido(id, {
            localId,
            isCompleted,
            startedAt,
            isDelevoped
        })
        .then(data =>{
            if(data[0]){
                res.status(200).json({message:`Pedido with ID: ${id}, edited succesfully`, data})
                } else {res.status(404).json({message: 'Invalid ID'})}
        })
        .catch(err => {res.status(400).json({message: err.message})})
    } else {
        res.status(400).json({
            message: "You can edit only the following fields",
            fields: {
                localId: "uuid",
                isCompleted: "boolean",
                startedAt:"horario",
                isDelevoped: "boolean"
            }
        })
    }
    
}
const deletePedido = (req, res) => {
    const id = req.params.id
    pedidoControllers.deletePedido(id)
    .then(data => {
        if(data) {res.status(204).json({message: 'Ok! comander 🆗'})} else {
            res.status(404).json({message:'InvalidID'})
        }
    })
    .catch(err => {res.status(404).json({message: err.message})})
}
const createPedido = (req, res) => {
    const { localId, startedAt} = req.body;
    if(localId, startedAt) 
    {
        pedidoControllers.createPedido({
            localId,
            startedAt
        })
        .then(data => {res.status(201).json(data)})
        .catch(err=>{res.status(400).json(err.message)})
    } else {
        res.status(400).json({message: 'All fields must be completed',
        fields:
        {
            localId: "uuid",
            startedAt: "horario",
        }})
    }
}
module.exports = {
    getAllPedidos,
    getPedidoById,
    getPedidoByLocal,
    getPedidoDataByCategory,
    patchPedido,
    deletePedido,
    createPedido
}