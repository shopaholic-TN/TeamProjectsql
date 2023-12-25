const express=require('express')
const cors =require('cors')
const app=express()
const homeRoutes = require('./routes/homeRouter.js')
const userRoutes = require('./routes/user-routes.js')
const cardRoutes= require('./routes/card-routes.js')
const wishListRouter = require('./routes/wishlist-routes.js')
const db=require('./models')
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:true}))


app.use('/home',homeRoutes)
app.use('/api/users',userRoutes)
app.use('/api/addToCard',cardRoutes)
app.use('/api/wishList',wishListRouter)
//connect 
db.sequelize.sync().then(()=>{
    app.listen(3001,()=>{
     console.log('server is running on port 3000..!')
    })
})