const db=require('../models/index.js')

const getAll=((req,res)=>{
   db.User.findAll().then((result) => {
   res.status(200).json(result)
  }).catch((err) => {
   res.status(500).send(err)
  });
})
const getPr=((req,res)=>{
  db.Product.findAll().then((result) => {
  res.status(200).json(result)
 }).catch((err) => {
  res.status(500).send(err)
 });
})
const addPr=((req,res)=>{
  db.Product.create(req.body).then((result) => {
      res.status(200).send(result)
  }).catch((err) => {
      res.status(500).send(err)
  });
})
const addUser = ((req,res)=>{
  db.User.create(req.body).then((result)=>{res.status(200).send(result)})
  .catch((err)=>res.status(500).send(err))
})

const remove = (req, res) => {
  db.User.destroy({
    where: { id: req.params.id } // Use req.params.id to get the user ID
  })
    .then((result) => {
      res.status(200).send('User deleted');
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

const modif = (req, res) => {
  const id = req.params.id;

  db.User.update({role:req.body.role}, { where: { id: id } })
      .then((result) => {
          res.status(200).send(result);
      })
      .catch((err) => {
          res.status(500).send(err);
      });
};
const del = (req, res) => {
  db.Product.destroy({
    where: { id: req.params.id } // Use req.params.id to get the user ID
  })
    .then((result) => {
      res.status(200).send('User deleted');
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

module.exports = {getAll,addPr,addUser,remove,getPr,modif,del}
