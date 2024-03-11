const Categories = require('./categories.models')
const Product = require('./product.models')
const Pedido = require('./pedido.models')
const List = require('./list.models')
const CategoriesProducts = require('./categoriesProducts.models')
const Local = require('./local.models')

const initModels = () => {
      
// Product -> List (1 : M)
    List.belongsTo(Product)
    Product.hasMany(List) 

// Pedido -> List (1 : M)
    List.belongsTo(Pedido)
    Pedido.hasMany(List)
// -------------------------------------------------


// Product -> CategoriesProducts (1 : M)
    CategoriesProducts.belongsTo(Product)
    Product.hasMany(CategoriesProducts) 

// Categories -> CategoriesProducts (1 : M)
    CategoriesProducts.belongsTo(Categories)
    Categories.hasMany(CategoriesProducts)

// --------------------------------------------------

// Local -> Pedido (1 : M)
Pedido.belongsTo(Local)
Local.hasMany(Pedido)
}
module.exports = initModels;

