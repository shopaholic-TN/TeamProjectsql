import React from 'react'
import {useState} from 'react'
import Header from './Header.jsx'

import './cart.css'
export default function Cart (props){
  
  console.log(props.changeView)
    const [products,setProducts]=useState([])
    const [total,setTotal]=useState(0)
    const calculateTotal=(products)=>{
        console.log('calculateTotal works with these products',products)
     let somme = 0
     for(var i=0;i<products.length;i++){
        let price=products[i].price
        somme=somme+price
     }
     
     setTotal(somme)
    }
    return (
        <div className='cart' >
            <Header changeView={props.changeView} />
            {/*  <nav style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                <h2>market</h2>
                <ul style={{display:'inline-block'}} >
                    <li>home</li>
                    <li>contact</li>
                    <li>about</li>
                    <li>sign up</li>
                
                </ul>
                <input type="text" />


                <div>
                <FavoriteBorderIcon/>
                <AddShoppingCartIcon/>
                <AccountCircleIcon/>
                </div>

              </nav>*/}
              <div>
               home/Cart
              </div>
              <section>
              <div>
                <div className='cart-table-columns'>
                    <div>Product</div>
                    <div>Price</div>
                    <div>Quantity</div>
                    <div>SubTotal</div>
                </div>
                    <div   className='single-product' >
                    <div>ProductName here</div>
                    <div>Price here</div>
                    <div>Quantity here</div>
                    <div>SubTotal here</div>
                    </div>
              </div>
              </section>

              <div className='check-total'>
                <div className='total-text' >
                <h2>total:</h2>
                <span>   {total}  </span>
                </div>
                <button className='check-total-btn' onClick={()=>{calculateTotal(products)}} >check total</button>
              </div>
        </div>
    )
}