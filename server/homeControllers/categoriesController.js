const db = require('../models/index.js')

const getProductByCategories = (req,res)=>{
    console.log(req)
    
    db.Product.findAll({
        where: {productCategory:req.body.productCategory}
      }).then((data)=>{
        res.send(data)
      })
      .catch((err)=>{
        res.send('there is error',err)
      })
     
}

module.exports.getProductByCategories=getProductByCategories
