const allProductsController = require('../homeControllers/allProductsController.js')
const express= require('express')
const router = express.Router()
router.get('/',allProductsController.getAll)
module.exports = router