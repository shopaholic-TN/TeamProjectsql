const express=require('express')
const adminRouter=express.Router()
const admin = require('../controllers/admin-controller')
console.log(admin);

adminRouter.get('/getUser',admin.getAll)
adminRouter.post('/addProduct',admin.addPr)
adminRouter.post('/addUser',admin.addUser)
adminRouter.delete('/delUser/:id',admin.remove)
adminRouter.get('/getPr',admin.getPr)
adminRouter.put('/modif/:id',admin.modif)
adminRouter.delete('/delPr/:id',admin.del)

module.exports =adminRouter