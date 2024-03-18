const productControllers = require('./product.controllers')

const getAllProducts =(req,res)=>{
    productControllers.getAllProducts()
    .then((data)=>{res.status(200).json(data)})
    .catch((err)=> {res.status(400).json({message:err.message})})
}
const getProductById = (req,res) =>{
    const id=req.params.id
    productControllers.getProductById(id)
    .then(data=>{res.status(200).json(data)})
    .catch(err=>{res.status(404).json({message:err.message})})
}
const getProductByName = (req,res) =>{
    const productName=req.params.productName
    productControllers.getProductByName(productName)
    .then(data=>{res.status(200).json(data)})
    .catch(err=>{res.status(404).json({message:err.message})})
}
const patchProduct =(req,res)=>{
    const id=req.params.id
    const {name, unity, pack, mvq, img, categoryId} = req.body
    productControllers.updateProduct(id, {
        name,
        unity,
        pack,
        mvq,
        img,
        categoryId
    })
    .then(data =>{
        if(data[0]){
            res.status(200).json({message:`Product with ID: ${id}, edited succesfully`})
            } else {res.status(404).json({message: 'Invalid ID'})}
    })
    .catch(err => {res.status(400).json({message: err.message})})
}
const deleteProduct = (req, res) => {
    const id = req.params.id
    userControllers.deleteProduct(id)
    .then(data => {
        // [porque al eliminar un registro nos devuelve número -> if (data !== 0 || data)]
        // if(data)  {
            res.status(204).json()
        // }else {
        //     res.status(404).json({message:'InvalidID'})
        // }
    })
    .catch(err => {res.status(404).json({message: err.message})})
}
const createProduct = (req, res) => {
    const { id, name, stock, img}= req.body;
    if(id, name && stock && img) 
    {
        productControllers.createProduct({
            id,
            name,
            stock,       
            img
        })
        .then(data => {res.status(201).json(data)})
        .catch(err=>{res.status(400).json(err.message)})
    } else {
        res.status(400).json({message: 'Allfields must be completed',
        fields:
        {
            name: 'string',
            stock: 'number',
            img: 'url'
        }})
    }
}

module.exports= {
    getAllProducts,
    getProductById,
    getProductByName,
    patchProduct,
    deleteProduct,
    createProduct
}