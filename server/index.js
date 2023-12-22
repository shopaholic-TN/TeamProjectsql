const express=require('express')
const cors =require('cors')
const app=express()
const categoriesRoutes = require('./homeRoutes/categoriesRoutes.js')
const allProducts=require('./homeRoutes/allProductsRoutes.js')
const userRoutes = require('./routes/user-routes.js')
const db=require('./models')
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:true}))


app.use('/api/categories',categoriesRoutes)

app.use('/api/allProducts',allProducts)
app.use('/api/users',userRoutes)
//connect 
db.sequelize.sync().then(()=>{
    app.listen(3000,()=>{
     console.log('server is running on port 3000..!')
    })
})