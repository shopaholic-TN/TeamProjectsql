const db = require('../models/index.js')
const addToWishList = (req,res)=>{
    db.WishList.create({
        wishListName:req.body.wishListName,
        wishListPrice:req.body.wishListPrice,
        wishListDescription:req.body.wishListDescription,
        wishListImage:req.body.wishListImage,
        UserId:req.params.id

    }).then((data)=>{
        res.status(200).send(data)
    }).catch((err)=>{
        res.status(500).send(err.message)
    })
}
module.exports.addToWishList=addToWishList