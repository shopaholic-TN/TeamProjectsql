import {React,useState,useEffect }from 'react'
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import WatchIcon from '@mui/icons-material/Watch';
import ComputerIcon from '@mui/icons-material/Computer';
import CameraIcon from '@mui/icons-material/Camera';
import HeadsetIcon from '@mui/icons-material/Headset';
import GamepadIcon from '@mui/icons-material/Gamepad';
import './Categories.css'
import axios from 'axios'
export default function Categories(){
     const categories=['Phones','SmartWatch','Computers','Camera','HeadPhones','Gaming']
     const getCategorie = (cat)=>{
        let categorie = cat
        axios.post("http://localhost:3000/api/categories/get",{productCategory:categorie}).then((results)=>{
            console.log(results.data)
        }).catch((err)=>{
            console.log(err.message)
        })
     }
    
    return(
        
        <div className='categories'>
            <h3>Browse By Categories:</h3>
            
            <div className='oneCategory' onClick={()=>{getCategorie(categories[0])}} >
            <SmartphoneIcon color="primary" fontSize="large" />
            <div> {categories[0]} </div>
            </div>  
            <div className='oneCategory' onClick={()=>{getCategorie(categories[1])}} >
            <WatchIcon color="primary" fontSize="large" />
            <div> {categories[1]} </div>
            </div>
            <div className='oneCategory' onClick={()=>{getCategorie(categories[2])}} >
            <ComputerIcon color="primary" fontSize="large" />
            <div> {categories[2]} </div>
            </div>
            <div className='oneCategory' onClick={()=>{getCategorie(categories[3])}} >
            <CameraIcon color="primary" fontSize="large" />
            <div> {categories[3]} </div>
            </div>
            <div className='oneCategory' onClick={()=>{getCategorie(categories[4])}} >
            <HeadsetIcon color="primary" fontSize="large" />
            <div> {categories[4]} </div>
            </div>
            <div className='oneCategory' onClick={()=>{getCategorie(categories[5])}} >
            <GamepadIcon color="primary" fontSize="large" />
            <div> {categories[4]} </div>
            </div>
        </div>
    )
}