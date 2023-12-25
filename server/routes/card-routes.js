const express = require('express')
const cardControllers= require('../controllers/card-controllers.js')
const router = express.Router()
router.post('/:idUser/:productId',cardControllers.addToCard)
router.get('/',cardControllers.getCard)
router.delete('/delete/:id',cardControllers.deleteFromCard)
module.exports=router