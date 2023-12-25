import React, { useEffect, useState } from 'react'
import './thisMonth.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCalendarDay} from "@fortawesome/free-solid-svg-icons"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import axios from 'axios'


function ThisMonth(props) {

    const [monthProducts,setMonthProducts]=useState([])
    const [limit,setLimit]=useState(true)
    const card=props.card
    const setCard = props.setCard
    const wished=props.wished
    const setWished=props.setWished
const fetchMonthProducts=async()=>{

    const res=await axios.get('http://localhost:3001/home/monthProducts') 
    console.log(res.data)
    setMonthProducts(res.data)
}

    useEffect(()=>{
        fetchMonthProducts()
        setLimit(true)
    },[])

    const addToCart = (product)=>{
        const productToPost={
            productName:product.productName,
            productPrice:product.productPrice,
            UserId:product.UserId,
            ProductId:product.id
        }
        axios.post(`http://localhost:3001/api/addToCard/1/${product.productId}`,productToPost).then((result)=>{
            setCard([...card,result.data])
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
    return (
<div>
                <hr className='horizantalLine'/>
                <h1 style={{marginLeft:'65px'}}><FontAwesomeIcon icon={faCalendarDay} /><span style={{color:'red',fontWeight:'600px'}}>This Month</span></h1>
            

            <div className='contenair'>

            {limit===true?
            
            monthProducts.slice(0,4).map((el,i)=>{
                
                return(
                    <div class="cardp" key={i}>
                        <FavoriteBorderIcon onClick={()=>{addToWishedList(el)}}/>
                    <img src={el.productImage.url} alt="Product Image"/>
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
            }):monthProducts.slice(4,monthProducts.length).map((el,i)=>{
                
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
                                
                            }}
                            >View All Products</button>
                             <img className='banner' src='https://assets.indiadesire.com/images/Flipkart%20Electronics%20Sale%20may%202023.jpg'/>
        
</div>
    )
}

export default ThisMonth
