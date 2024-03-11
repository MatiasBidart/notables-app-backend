const localControllers = require('./local.controller')

const getAllLocals =(req,res)=>{
    localControllers.getAllLocals()
    .then((data)=>{res.status(200).json(data)})
    .catch((err)=> {res.status(400).json({message:err.message})})
}
const getLocalById =(req,res)=>{
    const id = req.params.id;
    localControllers.getLocalById(id)
    .then((data)=>{res.status(200).json(data)})
    .catch((err)=> {res.status(400).json({message:err.message})})
}
const patchLocal =(req,res)=>{
    const id=req.params.id
    const {name} = req.body
    localControllers.updateLocal(id, {name})
    .then(data =>{
        if(data[0]){
            res.status(200).json({message:`Product with ID: ${id}, edited succesfully`})
            } else {res.status(404).json({message: 'Invalid ID'})}
    })
    .catch(err => {res.status(400).json({message: err.message})})
}
const deleteLocal = (req, res) => {
    const id = req.params.id
    localControllers.deleteLocal(id)
    .then(data => {
        if(data)  {res.status(204).json()} else {
            res.status(404).json({message:'InvalidID'})
        }
    })
    .catch(err => {res.status(404).json({message: err.message})})
}
const createLocal = (req, res) => {
    const {id, name} = req.body
    if({id, name}) 
    {
        localControllers.createLocal({
            id,
            name
        })
        .then(data => {res.status(201).json(data)})
        .catch(err=>{res.status(400).json(err.message)})
    } else {
        res.status(400).json({message: 'All fields must be completed',
        fields:
        {
            name: "Ejemplo: CAO"
        }})
    }
}
module.exports = {
    getAllLocals,
    getLocalById,
    patchLocal,
    deleteLocal,
    createLocal,
}