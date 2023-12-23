import React from 'react'
import axios from 'axios'
import './categories.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons'
function Categories() {
    const categories=['Phones','Computers','SmartWatch','Camera','HeadPhones','Gaming']
    const getCategorie = (cat)=>{
        let categorie = cat
        axios.post("http://localhost:3000/api/categories/getCategory",{productCategory:categorie}).then((results)=>{
            console.log(results.data)
        }).catch((err)=>{
            console.log(err.message)
        })
     }
    return (
        <div>
            <h1 style={{marginLeft:'65px'}}><FontAwesomeIcon icon={faLayerGroup} /><span style={{color:'red',fontWeight:'600px'}}>Categories</span></h1>
        <div className='contenairCateg'>
        <div class="card"  onClick={()=>{getCategorie(categories[0])}} >
            <img src="https://static.vecteezy.com/system/resources/previews/006/624/453/non_2x/smartphone-icon-design-phone-symbol-free-vector.jpg" alt="Card Image"/>
            <h2> {categories[0]} </h2>
        </div>      

        <div class="card" onClick={()=>{getCategorie(categories[1])}} >
            <img src="https://www.creativefabrica.com/wp-content/uploads/2021/06/21/laptop-computer-icon-set-Graphics-13663666-2-580x386.jpg" alt="Card Image"/>
            <h2> {categories[1]} </h2>
        </div> 

        <div class="card"  onClick={()=>{getCategorie(categories[2])}}>
            <img src="https://t3.ftcdn.net/jpg/00/95/60/62/360_F_95606285_x1IGnaXMyUpKj2cWp8oUiA0W25As9xjw.jpg" alt="Card Image"/>
            <h2> {categories[2]} </h2>
        </div> 

        <div class="card"  onClick={()=>{getCategorie(categories[3])}} >
            <img src="https://static.vecteezy.com/system/resources/previews/006/998/434/non_2x/photo-camera-icons-photo-camera-icon-design-illustration-photo-camera-simple-sign-photo-camera-logo-vector.jpg" alt="Card Image"/>
            <h2> {categories[3]} </h2>
        </div> 

        <div class="card" onClick={()=>{getCategorie(categories[4])}} >
            <img src="https://media.istockphoto.com/id/1244097573/vector/headphones-minimal-icon-with-sound-waves.jpg?s=612x612&w=0&k=20&c=OvARZEMYt_CM9M9-oJmMZ3O-HtEB-CAKqpGZPSA1acM=" alt="Card Image"/>
            <h2> {categories[4]} </h2>
        </div> 

        <div class="card"  onClick={()=>{getCategorie(categories[5])}}>
            <img src="https://static.vecteezy.com/system/resources/previews/004/582/514/original/gamepad-icon-design-symbol-game-gaming-controller-joystick-for-multimedia-free-vector.jpg" alt="Card Image"/>
            <h2> {categories[5]} </h2>
        </div> 

           
            </div>
        </div>
    )
}

export default Categories
