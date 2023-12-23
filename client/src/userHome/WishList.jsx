import React from 'react'
import Header from './Header.jsx'

import './elementCart.css'
export default function WishList(props){
    const changeView = props.changeView
    const wished =props.wished
    return (
        <div  className="wishlist">
            <Header changeView= {changeView} />
            {wished.map((wishedProduct)=>{
                return(
                    <div className='product-card' >
                <div>
                
                <img src={wishedProduct.wishListImage} alt="no-content" />
                </div>
                <div className='product-name'> {wishedProduct.wishListName} </div>
                <div className='product-details'> {wishedProduct.wishListImage} </div>
                <div> {wishedProduct.wishListPrice} </div>
            </div>
                )
            })}
        </div>
    )
}