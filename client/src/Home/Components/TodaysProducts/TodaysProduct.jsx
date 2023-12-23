import React, { useState } from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCalendarDay} from "@fortawesome/free-solid-svg-icons"
import {FaStar} from 'react-icons/fa'
import './todaysProduct.css'
function TodaysProduct() {


    return (
        
<div>
                <hr className='horizantalLine'/>
                <h1 style={{marginLeft:'65px'}}><FontAwesomeIcon icon={faCalendarDay} /><span style={{color:'red',fontWeight:'600px'}}>Todays</span></h1>
            

            <div className='contenair'>

            <div class="cardp">
                <img src="https://www.savenearn.com.ph/cdn/shop/products/redmi-note-10-pro-8gb-ram-128gb-rom-smartphone-xiaomi-redmi-save-n-earn-wireless_1024x.png?v=1638061169" alt="Product Image"/>
                <div class="card-contentp">
                <div class="card-titlep">Product Name</div>
                <div class="card-descriptionp">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                <div class="card-pricep">$99.99</div>
                <button className='cta-buttonp'>Add To Card</button>
                </div>
            </div>
       
        </div>

                <button className='btn'>View All Products</button>
                    
                <hr className='horizantalLine'/>

</div>
    )
}

export default TodaysProduct
