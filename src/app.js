const express = require('express'); 
const {port} = require('./config');
const cors = require('cors');
const userRouter = require('./users/user.router');
const authRouter = require('./auth/auth.router');
const categoryRouter = require('./categories/categories.router');
const productRouter = require('./product/product.router');
const pedidoRouter = require('./pedido/pedido.router');
const localRouter = require('./local/local.router');
const listRouter = require('./list/list.router');
const categoriesProductsRouter = require('./categoriesProducts/categoriesProducts.router');
const initModels = require('./models/initModels');

const app = express();
app.use(express.json());
app.use(cors());

const db = require('./utils/database')
db.authenticate()
    .then(()=> {console.log('Database Authenticated')})
    .catch(err=> {console.log(err)})

db.sync()
    .then(()=> {console.log('Database Synced')})
    .catch(err=> {console.log(err)})

initModels()

app.get('/',
    (req,res) => {
    res.status(200).json({
        message: 'OK', users: `localhost:${port}/api/v1/users`
    })
    }
)

app.use('/api/v1/users', userRouter)
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/categories', categoryRouter)
app.use('/api/v1/products', productRouter)
app.use('/api/v1/pedido', pedidoRouter)
app.use('/api/v1/locals', localRouter)
app.use('/api/v1/list', listRouter)
app.use('/api/v1/categories_products/', categoriesProductsRouter)




app.listen(port, () =>{console.log(`Server started at port ${port}`)})