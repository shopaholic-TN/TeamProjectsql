import React, { useEffect, useState } from 'react'
import './ourProduct.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCalendarDay} from "@fortawesome/free-solid-svg-icons"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import axios from 'axios'


function OurProduct(props) {

const [ourProducts,setOurProducts]=useState([])
const [limit,setLimit]=useState(true)
const card=props.card
const setCard = props.setCard
const wished=props.wished
const setWished=props.setWished

const fetchAllProducts=async()=>{

    const res=await axios.get('http://localhost:3000/home/ourProducts') 
    console.log(res.data)
    setOurProducts(res.data)
}

    useEffect(()=>{
        fetchAllProducts()
        setLimit(true)
    },[])
    const addToCart = (product)=>{
        const productToPost={
            productName:product.productName,
            productPrice:product.productPrice,
            UserId:product.UserId,
            ProductId:product.id
        }
        axios.post(`http://localhost:3000/api/addToCard/1/${product.id}`,productToPost).then((result)=>{
            setCard(result.data)
            console.log(result.data)
            
        }).catch((err)=>{
            console.log(err.message)
        })
        console.log(card,'item:'+card[card.length-1]+"is added to cart successfully!")
       }
       const addToWishedList=(produit)=>{
        const produitToPost={
            wishListName:produit.productName,
        wishListPrice:produit.productPrice,
        wishListDescription:produit.productDescription,
        wishListImage:produit.productImage,
        UserId:produit.UserId
        }
        axios.post(`http://localhost:3000/api/wishList/${produit.UserId}`,produitToPost).then((results)=>{
            console.log(results.data)
        }).catch((err)=>{
            console.log('err:',err.message)
        })
       }
       const renderSingle=(view,product)=>{
            props.changeView(view)
            props.setSelected(product)
       }
    return (
<div>
               <h1 style={{marginLeft:'65px'}}><FontAwesomeIcon icon={faCalendarDay} /><span style={{color:'red',fontWeight:'600px'}}>Our Products</span></h1>
      
               <div className='contenair'>


            {limit===true?
            
            
            ourProducts.slice(0,8).map((el,i)=>{
                
                return(
                    <div class="cardp" key={i}>
                        <FavoriteBorderIcon  onClick={()=>{addToWishedList(el)}}/>
                    <img src={el.productImage.url} alt="Product Image" onClick={()=>renderSingle('single',el)}/>
                    <div class="card-contentp">
                    <div class="card-titlep">{el.productName}</div>
                    <div class="card-descriptionp">{el.productDescription}</div>
                    <div class="card-pricep">${el.productPrice}</div>
                    <button className='cta-buttonp' onClick={()=>{
                        addToCart(el)
                    }}>Add To Card</button>
                </div>
            </div>
                )
            }):ourProducts.slice(8,24).map((el,i)=>{
                
                return(
                    <div class="cardp" key={i}>
                    <img src={el.productImage.url} alt="Product Image"/>
                    <div class="card-contentp">
                    <div class="card-titlep">{el.productName}</div>
                    <div class="card-descriptionp">{el.productDescription}</div>
                    <div class="card-pricep">${el.productPrice}</div>
                    <button className='cta-buttonp' onClick={()=>{addToCart(el)}} >Add To Card</button>
                </div>
            </div>
                )
            })}

</div>

            <button className='btn' onClick={()=>{
                setLimit(false)

            }}>View All Products</button>
</div>
    )
}

export default OurProduct
