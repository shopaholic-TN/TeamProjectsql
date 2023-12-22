const categoriesController = require('../homeControllers/categoriesController')
const express = require('express')
const router = express.Router()


router.post('/get',categoriesController.getProductByCategories)
module.exports=router