import './navbar.css'
import React from 'react'
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";




function NavBar() {
    return (
        <div>
            <div className='topHeader'>            
            <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!  &nbsp; <strong><u>ShopNow</u></strong></p>
            </div>
             
             <div className='navBar'>
                    <span className='logo'>Exclusive</span>

                <div className='navList'>
                    <span>Home</span>
                    <span>Contact</span>
                    <span>About</span>
                    <span>SignUp</span>
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
        <a href="#">
          <FiHeart className="nav-icons" />
        </a>
        <a href="">
          <AiOutlineShoppingCart className="nav-icons" />
        </a>
        <a href="">
          <AiOutlineUserAdd className="nav-icons" />
        </a>
      </div>
    </nav>                          
             </div>   
            <hr className='horizantalLine'/>
            <hr className='verticalLine'/> 
        </div>
       
        )
}

export default NavBar
