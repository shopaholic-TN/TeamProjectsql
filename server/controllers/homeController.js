const db=require('../models')


exports.getProducts=(req,res)=>{

    db.Product.findAll().then((result) => {
        res.status(200).json(result)
    }).catch((err) => {
        res.status(500).json(err)
    });
}

exports.getMonthProducts=(req,res)=>{

    db.Product.findAll({where:{thisMonthProduct:true}}).then((result)=>{
        res.status(200).json(result)
    }).catch((err)=>{
        res.status(500).json(err)
    })
}

exports.getTodaysProducts=(req,res)=>{

    db.Product.findAll({where:{todaysProduct:true}}).then((result) => {
        res.status(200).json(result)
    }).catch((err) => {
        res.status(500).json(err)
    });
}

exports.getByCategory=(req,res)=>{

    db.Product.findAll({where:{productCategory:req.params.productCategory}}).then((result) => {
        res.status(200).json(result)
    }).catch((err) => {
        res.status(500).json(err)
    });
}
