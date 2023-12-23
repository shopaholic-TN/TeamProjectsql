const express=require('express')
const wishListControllers=require('../controllers/wishlist-controllers.js')
const router = express.Router()
router.post('/:userId',wishListControllers.addToWishList)
module.exports=router