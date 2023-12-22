import React from 'react'
import Header from './Header.jsx'
import FavoriteIcon from '@mui/icons-material/Favorite';
import './elementCart.css'
export default function WishList(props){
    const changeView = props.changeView
    return (
        <div  className="wishlist">
            <Header changeView= {changeView} />
            <div className='product-card' >
                <div>
                <FavoriteIcon color="secondary" fontSize="large" />
                <img  alt="no-content" />
                </div>
                <div className='product-name'>product name </div>
                <div className='product-details'> product description </div>
                <div> product price </div>
            </div>
        </div>
    )
}