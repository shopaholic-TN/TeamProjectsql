const db = require('../models/index.js')
const addToCard = (req,res)=>{
    db.Card.create({
       productName: req.body.productName,
       productPrice:req.body.productPrice,
       productImage:req.body.productImage,
       UserId:req.params.idUser
    }).then((results)=>{
        res.status(200).send(results)
    }).catch((err)=>{
        console.log('thereiserror',err)
     res.status(500).send(err.message)    
    })
}
module.exports.addToCard=addToCard