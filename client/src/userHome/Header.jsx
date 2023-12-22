import {React,useState} from 'react'
import UserProfile from './UserProfile';
// import WishList from './WishList';
// import AllProducts from '../homeComponents/AllProducts';
// import Categories from '../homeComponents/Categories';
import Typography from '@mui/material/Typography';
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "./header.css"
export default function Header(props){
  const changeView =props.changeView
 
console.log(changeView)
    const goToProfile=()=>{
      console.log(changeView("profile"))
      changeView("profile")
    }

    return (
        <header>
           <nav style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                <h2>market</h2>
                <ul style={{display:'inline-block'}} >
                    <li>home</li>
                    <li>contact</li>
                    <li>about</li>
                    <li>sign up</li>
                
                </ul>
                <input type="text" />
               
 


                <div>
                <FavoriteBorderIcon onClick={()=>{changeView('wishlist')}} />
                <AddShoppingCartIcon onClick={()=>{/*goToCart ()*/}} />
                <PopupState variant="popover" popupId="demo-popup-popover">
        {(popupState) => (
          <div>
            <AccountCircleIcon style={{cursor:'pointer'}} variant="contained" {...bindTrigger(popupState)}>
              Open Popover
            </AccountCircleIcon>
            <Popover      
              {...bindPopover(popupState)}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
            >
              <Typography   onClick={()=>{goToProfile()}} style={{cursor:'pointer',background:'black',color:'white',textAlign:'center'}} sx={{ p: 2 }}>Manage My Account.</Typography>
            </Popover>
          </div>
        )}
      </PopupState>
                </div>

              </nav>
              



        </header>
        
    )
}