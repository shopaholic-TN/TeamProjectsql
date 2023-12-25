const db = require('../models/index.js')
const addToCard = (req,res)=>{
    db.Card.create({
        productName:req.body.productName,
        productPrice:req.body.productPrice,
       UserId:req.params.idUser,
       ProductId:req.params.id
    }).then((results)=>{
        res.status(200).send(results)
    }).catch((err)=>{
        console.log('thereiserror',err)
     res.status(500).send(err.message)    
    })
}
const getCard = (req,res)=>{
    db.Card.findAll({}).then((data)=>{
        res.status(200).send(data)
    }).catch((err)=>{
        res.status(500).send(err.message)
    })
}
const deleteFromCard=(req,res)=>{
    const id= req.params.id
   
    db.Card.findOne({where:{id:id}}).then((data)=>{
        console.log(data,'this will be deleted!')
        data.destroy()
        console.log(data,'is destroyed!')
        res.status(200).send(data)
    }).catch((err)=>{
        res.status(500).send(err.message)

    })

}
module.exports={addToCard,getCard,deleteFromCard}