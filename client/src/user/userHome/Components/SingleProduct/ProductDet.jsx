import React from "react";
import "./ProductDet.css";
import {useState} from 'react'
import axios from 'axios'
function ProductDet(props) {
  const setCard = props.setCard
  const selected=props.selected
  const card =props.card
  const [quantity,setQuantity]=useState(1)
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
  return (
    <div className="ProductDetails">
      <div className="ProductDetails_header">
        <div className="ProductDetails_gallery">
          <div className="vertical_gallery">
         
          </div>
          <div className="main_product">
           
          </div>
        </div>
        <div className="ProductDetails_Info">
          <div className="Details">
            <p id="Product_Title">  {selected.productName} </p>
            <div className="Details_reviews">
              
              <p id="reviews_counter">(150 Reviews)</p>
              <p id="availibilty">In Stock</p>
            </div>
            <div>
            <p id="price"> {selected.productPrice} </p>
            <p id="description">
              {selected.productDescription}
            </p>
          </div>
            <div id="cuantity">
              <div className="cuantity_counter">
                <button id="minest" onClick={()=>setQuantity(quantity-1)}>-</button>
                <p id="num">2</p>
                <button id="plus" onClick={()=>setQuantity(quantity+1)}>+</button>
              </div>
              <button id="add" onClick={()=>addToCart(selected)}>Add To Cart</button>
              <div className="wishList">
               { /*<img src={WishListIcon} alt="" />*/}
              </div>
              </div>
              </div>
              <div className="shipping">
                <div className="rect1">
                 {/* <img src={ReturnIcon} alt="" />*/}
                  <div className="containerr">
                    <p id="free">Free Delivery</p>
                    <p id="free_desc">
                      Enter your postal code for Delivery Availability
                    </p>
                  </div>
                </div>
                <div className="rect2">
                 {/*<img src={SendIcon} alt="" />*/} 
                  <div className="containerr">
                    <p id="return">Return Delivery</p>
                    <p id="return_desc">
                      Free 30 Days Delivery Returns. <span>Details</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ProductDetails_Prodcuts">
            <div className="Related_Item_Title">
              <div className="red_icon"></div>
              <p>Related Item</p>
            </div>
            <div className="Related_Item">
             {/* <Product />
              <Product />
              <Product />
<Product />*/}
            </div>
          </div>
        </div>
      );
    }

    export default ProductDet;