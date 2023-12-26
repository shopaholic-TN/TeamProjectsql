import './navbar.css'
import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
//import {Link} from 'react-router-dom'




function NavBar(props) {
  const changeView =props.changeView
 
  console.log(changeView)
      const goToProfile=()=>{
        console.log(changeView("profile"))
        changeView("profile")
      }
      const goToShoppingCard = ()=>{
        changeView('cart')
      }
      const goToWishList=()=>{
        changeView('wishlist')
      }
    return (
        <div>
            <div className='topHeader'>            
            <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!  &nbsp; <strong><u>ShopNow</u></strong></p>
            </div>
             
             <div className='navBar'>
                    <span className='logo'>Shopaholic</span>

                <div className='navList'>
                  { /* <span><Link style={{backgroundColor:"Link black"}} path='/'>Home</Link></span>
                    <span><Link path='/contact'>Contact</Link></span>
                    <span><Link path='/about'>About</Link></span>
                    <span><Link path='/signUp'>SignUp</Link></span>*/}
                   
                </div>
</div>
<nav>
      <div className="nav-container">
        <input
          className="search-input"
          type="text"
          placeholder="what are you looking for..?"
        />
      </div>
      <div className="profile-container">
        
          <FavoriteBorderIcon className="nav-icons"onClick={()=>{goToWishList()}} />
       
       
          <AddShoppingCartIcon className="nav-icons"onClick={()=>{goToShoppingCard()}} />
       
       
         <AccountCircleIcon onClick={()=>{goToProfile()}} /> 
        
      </div>
    </nav>                          
           </div>
        )
}

export default NavBar
