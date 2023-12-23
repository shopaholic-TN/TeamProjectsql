const express = require('express')
const userControllers = require('../controllers/user-controller.js')
const router = express.Router()
router.put('/updateUser/:id',userControllers.update)

module.exports=router