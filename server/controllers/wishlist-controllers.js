const db = require('../models/index.js')
const addToWishList = (req,res)=>{
    db.WishList.create({
        wishListName:req.body.wishListName,
        wishListPrice:req.body.wishListPrice,
        wishListDescription:req.body.wishListDescription,
        wishListImage:req.body.wishListImage,
        UserId:req.params.UserId

    }).then((data)=>{
        res.status(200).send(data)
    }).catch((err)=>{
        res.status(500).send(err.message)
    })
}
 const deleteFromWishlist =(req,res)=>{
     const name=req.params.namewishlist
    
     db.WishList.findOne({
         where:{
             wishListName:name
         }
     }).then((todelete)=>{
         todelete.destroy()
          console.log(todelete)
         res.status(200).send(todelete)
        }).catch((err)=>{
         res.status(500).send((err.message))
     })
 }

const getAll=(req,res)=>{
    db.WishList.findAll({}).then((data)=>{
        res.status(200).send(data)
    }).catch((err)=>{
        res.status(500).send(err.message)
    })
}
module.exports={addToWishList,deleteFromWishlist,getAll}