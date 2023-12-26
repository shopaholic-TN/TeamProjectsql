import React from 'react'
//import './home.css'
import NavBar from './Navigation/NavBar'
import Footer from './Footer/Footer'
import Sidebar from './Sidebar/Sidebar'
import TodaysProduct from './Components/TodaysProducts/TodaysProduct'
import Categories from './Components/categories/Categories'
import ThisMonth from './Components/ThisMonth/ThisMonth'
import OurProduct from './Components/OurProducts/OurProduct'
import NewArrival from './Components/newArrival/NewArrival'
function Home(props) {
  const changeView=props.changeView
  const card = props.card
  const setCard=props.setCard
  const wished=props.wished
  const setWished=props.setWished
 const  setSelected=props.setSelected
    return (
       <div>
        <NavBar changeView={changeView} />
       { /*<Sidebar/>*/}
        <TodaysProduct  setSelected={ setSelected}  wished={wished} setWished={setWished}  card={card} setCard={setCard}/>
        <Categories    wished={wished} setWished={setWished}  card={card} setCard={setCard}/>
        <ThisMonth  setSelected={ setSelected}  wished={wished} setWished={setWished}  card={card} setCard={setCard}/>
        <OurProduct  setSelected={ setSelected}   wished={wished} setWished={setWished}  card={card} setCard={setCard}/>
        <NewArrival/>
         <Footer/>  
       </div>
      
       
    )
}

export default Home
