const express=require('express')
const wishListControllers=require('../controllers/wishlist-controllers.js')
const router = express.Router()



router.get('/',wishListControllers.getAll)
router.post('/:userId',wishListControllers.addToWishList)
router.delete('/:namewishlist',wishListControllers.deleteFromWishlist)
module.exports=router