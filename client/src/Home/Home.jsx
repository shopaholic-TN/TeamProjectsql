import React from 'react'
import './home.css'
import NavBar from './Navigation/NavBar'
import Footer from './Footer/Footer'
import Sidebar from './Sidebar/Sidebar'
import TodaysProduct from './Components/TodaysProducts/TodaysProduct'
import Categories from './Components/categories/Categories'
import ThisMonth from './Components/ThisMonth/ThisMonth'
import OurProduct from './Components/OurProducts/OurProduct'
import NewArrival from './Components/newArrival/NewArrival'
function Home() {
    return (
       <div>
        <NavBar/>
        <Sidebar/>
        <TodaysProduct/>
        <Categories/>
        <ThisMonth/>
        <OurProduct/>
        <NewArrival/>
         <Footer/>  
       </div>
      
       
    )
}

export default Home
