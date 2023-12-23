import {React,useState} from 'react'
import Header from './Header.jsx'
 import Categories from '../Home/Components/categories/Categories.jsx'
 import UserProfile from './UserProfile.jsx'
 import Cart from './Cart.jsx'
import WishList from './WishList.jsx'
import OurProduct from '../Home/Components/OurProducts/OurProduct.jsx'
 export default function UserHome(){
     const [view,setView]=useState('home')
     const [card,setCard]=useState([])
     const [wished,setWished]=useState([])
     const changeView=(v)=>{
     setView(v)
     return v
     }
    if(view==='home'){
     return <div>
     <Header changeView={changeView}/>
     <Categories/>
     <OurProduct wished={wished} setWished={setWished}  card={card} setCard={setCard}/>
     </div>
    }
    else   if(view==='profile'){
     return <div>
     <UserProfile  changeView={changeView} />
     </div>
    }
    else if(view==='wishlist'){

     return <div>
       
         <WishList wished={wished} setWished={setWished}  changeView={changeView} /> </div>
    }
    else if(view==="cart"){
        return <Cart card={card}  changeView={changeView} />
    }
 }