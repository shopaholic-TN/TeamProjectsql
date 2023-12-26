/* const db=require('./models')

//post user
const create=((req,res)=>{
    db.User.create(req.body).then((result) => {
        res.status(200).send(result)
    }).catch((err) => {
        res.status(500).send(err)
    });
})

const find=((req,res)=>{
   // db.User.findAll()
   db.User.findOne({Where:{id:req.params.id}}).then((result) => {
    res.status(200).json(result)
   }).catch((err) => {
    res.status(500).send(err)
   });
})

const update=((req,res)=>{
    db.User.update(req.body,{Where:{id:req.params.body}}).then((result) => {
        res.status(200).send('user updated')
    }).catch((err) => {
        res.status(500).send(err)
    });
})

const destroy=((req,res)=>{
    db.User.destroy({Where:{id:req.params.body}}).then((result) => {
        res.status(200).send('user deleted')
    }).catch((err) => {
        res.status(500).send(err)
    });
})

module.exports={create,find,update} */