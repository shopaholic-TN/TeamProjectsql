import React from "react";
import "./ProductDet.css";
// import Ps5Controller from "../../assests/manette.png";
// import Ps5Controller1 from "../../assests/manette1.png";
// import Ps5Controller2 from "../../assests/manette2.png";
// import Ps5Controller3 from "../../assests/manette3.png";
// import Ps5Controller4 from "../../assests/manette4.png";
// import Star from "../../assests/Vector-star.svg";
// import ReturnIcon from "../../assests/icon-delivery.svg";
// import SendIcon from "../../assests/Icon-return.svg";


function ProductDet() {
  return (
    <div className="ProductDetails">
      <div className="ProductDetails_header">
        <div className="ProductDetails_gallery">
          <div className="vertical_gallery">
          {/*
            <img src={Ps5Controller1} alt="" />
            <img src={Ps5Controller2} alt="" />
            <img src={Ps5Controller3} alt="" />
            <img src={Ps5Controller4} alt="" />
  */}  
          </div>
          <div className="main_product">
            {/*<img src={Ps5Controller} alt="" />*/}
          </div>
        </div>
        <div className="ProductDetails_Info">
          <div className="Details">
            <p id="Product_Title">Havic HV G-92 Gamepad</p>
            <div className="Details_reviews">
              <div id="reviews">
               {/* <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
<img src={Star} alt="" />*/}
              </div>
              <p id="reviews_counter">(150 Reviews)</p>
              <p id="availibilty">In Stock</p>
            </div>
            <p id="price">$192.00</p>
            <p id="description">
              PlayStation 5 Controller Skin High quality vinyl with air channel
              adhesive for easy bubble free install & mess free removal Pressure
              sensitive.
            </p>
          </div>
          <div className="buttons">
            <div id="colorChoice">
              <p>Colors: </p>
              <div id="blue">
                <div></div>
              </div>
              <div id="red">
                <div></div>
              </div>
            </div>
            <div id="size_section">
              <p id="size">Size: </p>
              <div id="size_names">
                <div id="Xs">
                  <p>Xs</p>
                </div>
                <div id="S">
                  <p>S</p>
                </div>
                <div id="M">
                  <p>M</p>
                </div>
                <div id="L">
                  <p>L</p>
                </div>
                <div id="XL">
                  <p>XL</p>
                </div>
              </div>
            </div>
            <div id="cuantity">
              <div className="cuantity_counter">
                <button id="minest">-</button>
                <p id="num">2</p>
                <button id="plus">+</button>
              </div>
              <button id="add">Add To Cart</button>
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