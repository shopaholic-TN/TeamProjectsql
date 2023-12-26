import React, { useEffect, useState } from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCalendarDay} from "@fortawesome/free-solid-svg-icons"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import './todaysProduct.css'
import axios from 'axios'


function TodaysProduct(props) {
    const [todayProducts,setTodayProducts]=useState([])
    const [limit,setLimit]=useState(true)
    const card=props.card
    const setCard = props.setCard
    const wished=props.wished
    const setWished=props.setWished
    
const fetchTodayProducts=async()=>{

    const res=await axios.get('http://localhost:3001/home/todayProducts') 
    console.log(res.data)
    setTodayProducts(res.data)
}

    useEffect(()=>{
        fetchTodayProducts()
    },[])
    const addToCart = (product)=>{
        const productToPost={
            productName:product.productName,
            productPrice:product.productPrice,
            UserId:product.UserId,
            ProductId:product.ProductId
        }
        axios.post(`http://localhost:3001/api/addToCard/1/${product.productId}`,productToPost).then((result)=>{
            setCard([...card,result.data])
            console.log([card,result.data])
           
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
        
        }
        axios.post(`http://localhost:3001/api/wishList/${produit.UserId}`,produitToPost).then((results)=>{
      
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
                <hr className='horizantalLine'/>
                <h1 style={{marginLeft:'65px'}}><FontAwesomeIcon icon={faCalendarDay} /><span style={{color:'red',fontWeight:'600px'}}>Todays</span></h1>
                

            <div className='contenair'>

            {limit===true?
            
            todayProducts.slice(0,4).map((el,i)=>{
                
                return(
                    <div class="cardp" key={i}>
                        <FavoriteBorderIcon onClick={()=>{addToWishedList(el)}}/>
                    <img src={el.productImage.url} alt="Product Image" onClick={()=>renderSingle('single',el)}/>
                    <div class="card-contentp">
                    <div class="card-titlep">{el.productName}</div>
                    <div class="card-descriptionp">{el.productDescription}</div>
                    <div class="card-pricep">${el.productPrice}</div>
                    <button className='cta-buttonp'  onClick={()=>{addToCart(el)}}>Add To Card</button>
                </div>
            </div>
                )
            }):todayProducts.slice(4,todayProducts.length).map((el,i)=>{
                
                return(
                    <div class="cardp" key={i}>
                    <img src={el.productImage.url} alt="Product Image"/>
                    <div class="card-contentp">
                    <div class="card-titlep">{el.productName}</div>
                    <div class="card-descriptionp">{el.productDescription}</div>
                    <div class="card-pricep">${el.productPrice}</div>
                    <button className='cta-buttonp' onClick={()=>{addToCart(el)}}>Add To Card</button>
                </div>
            </div>
                )
            })}
                  
            </div>

                <button id='todayBtn' className='btn' onClick={()=>{
                    setLimit(!limit)
                }}
                
                >See All Products</button>
                   
                <hr className='horizantalLine'/>

</div>
    )
}

export default TodaysProduct
