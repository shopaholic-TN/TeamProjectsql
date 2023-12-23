import React, { useState,useEffect } from 'react'
import axios from 'axios'
import './ourProduct.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCalendarDay} from "@fortawesome/free-solid-svg-icons"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {FaStar} from 'react-icons/fa'

function OurProduct(props) {
    const card =props.card
    const setCard =props.setCard
    const setWished=props.setWished
    const wished=props.wished
    const [products,setProducts]=useState([])
    
    
    const getProducts = ()=>{
        axios.get("http://localhost:3000/api/allProducts").then((results)=>{
            setProducts(results.data)
            console.log(products)
        }).catch(err=>console.log(err))
    }
    useEffect(()=>{
        getProducts()
    }
       ,[])
       const addToCart = (product)=>{
        
        const objectProductToPost={
            productName:product.productName,
            productPrice:product.productPrice,
            productImage:product.productImage
        }
        axios.post('http://localhost:3000/api/addToCard/1',objectProductToPost).then((results)=>{
            setCard([...card,objectProductToPost])
            console.log(card)
        })
        console.log(card,'item:'+card[card.length-1]+"is added to cart successfully!")
       }
  const addToWishList = (p)=>{
    const productToWishList = {
        wishListName:p.productName,
        wishListPrice:p.productPrice,
        wishListDescription:p.productDescription,
        wishListImage:p.productImage
    }
    axios.post('http://localhost:3000/api/wishList/1',productToWishList).then((results)=>{
        setWished([...wished,productToWishList])
        console.log(wished)
    }).catch((err)=>{
        console.log(err.message)
    })
  }
    return (
<div>
               <h1 style={{marginLeft:'65px'}}><FontAwesomeIcon icon={faCalendarDay} /><span style={{color:'red',fontWeight:'600px'}}>Our Products</span></h1>
      
             {products.map((p)=>{
                return (
                    <div className='contenair'>

                    <div class="cardp">
                        <FavoriteBorderIcon onClick={()=>{addToWishList(p)}} />
                        <img src={p.productImage} alt="Product Image"/>
                        <div class="card-contentp">
                        <div class="card-titlep"> {p.productName} </div>
                        <div class="card-descriptionp"> {p.productDescription} </div>
                        <div class="card-pricep"> {p.productPrice} </div>
                        <button className='cta-buttonp' onClick={()=>addToCart(p)} >Add To Card</button>
                    </div>
                </div>

</div>
                )
             })}

            <button className='btn'>View All Products</button>
</div>
    )
}

export default OurProduct
