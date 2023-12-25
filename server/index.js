const express=require('express')
const app=express()  
const cors=require('cors')
 const adminRouter= require('./routes/admin-router.js')
//by default the file index will be imported from models and get database from it
const db=require('./models')
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(cors())
app.use('/admin',adminRouter)

//connect 
db.sequelize.sync().then(()=>{
    app.listen(3000,()=>{
        console.log('server is running on port 3000..!')
       })
})


