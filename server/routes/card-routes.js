const express = require('express')
const cardControllers= require('../controllers/card-controllers.js')
const router = express.Router()
router.post('/:idUser',cardControllers.addToCard)
module.exports=router