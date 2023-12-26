const express=require('express')
const homeRouter=express.Router()
const homeController=require('../controllers/homeController')


homeRouter.get('/ourProducts',homeController.getProducts)
homeRouter.get('/monthProducts',homeController.getMonthProducts)
homeRouter.get('/todayProducts',homeController.getTodaysProducts)
homeRouter.get('/category/:productCategory',homeController.getByCategory)










module.exports=homeRouter



