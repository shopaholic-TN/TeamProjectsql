const db = require('../models/index.js')
const getAll = (req,res)=>{
    db.Product.findAll({}).then((data)=>{
        
        console.log(data)
        res.send(data)
    }).catch((err)=>{
        console.log('there is an error!:',err)
        res.status(500).send('there is error on getting allproducts')
    })
}
module.exports.getAll=getAll