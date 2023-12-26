import React, { useEffect, useState } from 'react'
import './categories.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
function Categories() {
    const [byCategory,setByCategory]=useState([])
    const [refresh,setRefresh]=useState(true)
    
    

    const fetchByCategory=async(category)=>{

        const res=await axios.get(`http://localhost:3001/home/category/${category}`)
        setByCategory(res.data)
    }

    const Click=(category)=>{
        fetchByCategory(category)
        setRefresh(!refresh)
        console.log('Clicked')
    }

    useEffect(()=>{
    
    },[refresh])
   
    return (
    <div>
            <h1 style={{marginLeft:'65px'}}><FontAwesomeIcon icon={faLayerGroup} /><span style={{color:'red',fontWeight:'600px'}}>Categories</span></h1>
        <div className='contenairCateg'>

        <div className='card' onClick={()=>Click('Phones')}>
            <img src="https://static.vecteezy.com/system/resources/previews/006/624/453/non_2x/smartphone-icon-design-phone-symbol-free-vector.jpg"  alt="Card Image"/>
            <h2>Phones</h2>
        </div>      

        <div className="card" onClick={()=>Click('Computers')}>
            <img src="https://www.creativefabrica.com/wp-content/uploads/2021/06/21/laptop-computer-icon-set-Graphics-13663666-2-580x386.jpg"  alt="Card Image"/>
            <h2>Computers</h2>
        </div> 

        <div className="card" onClick={()=>Click('SmartWatch')}>
            <img src="https://t3.ftcdn.net/jpg/00/95/60/62/360_F_95606285_x1IGnaXMyUpKj2cWp8oUiA0W25As9xjw.jpg" alt="Card Image"/>
            <h2>SmartWatch</h2>
        </div> 

        <div className="card" onClick={()=>Click('Camera')}>
            <img src="https://static.vecteezy.com/system/resources/previews/006/998/434/non_2x/photo-camera-icons-photo-camera-icon-design-illustration-photo-camera-simple-sign-photo-camera-logo-vector.jpg" alt="Card Image"/>
            <h2>Camera</h2>
        </div> 

        <div className="card" onClick={()=>Click("HeadPhones")}>
            <img src="https://media.istockphoto.com/id/1244097573/vector/headphones-minimal-icon-with-sound-waves.jpg?s=612x612&w=0&k=20&c=OvARZEMYt_CM9M9-oJmMZ3O-HtEB-CAKqpGZPSA1acM=" alt="Card Image"/>
            <h2>HeadPhones</h2>
        </div> 

        <div className="card" onClick={()=>Click('Gaming')}>
            <img src="https://static.vecteezy.com/system/resources/previews/004/582/514/original/gamepad-icon-design-symbol-game-gaming-controller-joystick-for-multimedia-free-vector.jpg" alt="Card Image"/>
            <h2>Gaming</h2>
        </div> 

           
        </div>

            <div className='contenair'>

                {byCategory.map((el,i)=>{
                    
                    return(
                        <div class="cardp" key={i}>
                        <img src={el.productImage.url} alt="Product Image"/>
                        <div class="card-contentp">
                        <div class="card-titlep">{el.productName}</div>
                        <div class="card-descriptionp">{el.productDescription}</div>
                        <div class="card-pricep">${el.productPrice}</div>
                        <button className='cta-buttonp'>Add To Card</button>
                    </div>
                </div>
                    )
                })}
      
            </div>

    </div>
    )
}

export default Categories
