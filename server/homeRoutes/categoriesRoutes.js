const categoriesController = require('../homeControllers/categoriesController')
const express = require('express')
const router = express.Router()


router.post('/getCategory',categoriesController.getProductByCategories)
module.exports=router