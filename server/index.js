const express=require('express')
const app=express()
//by default the file index will be imported from models and get database from it
const db=require('./models')
app.use(express.urlencoded({extended:true}))
app.use(express.json())


//connect 
db.sequelize.sync().then(()=>{
    app.listen(3000,()=>{
        console.log('server is running on port 3000..!')
       })
})


