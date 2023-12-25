import {React,useState} from 'react'
import NavBar from './userHome/Navigation/NavBar.jsx'
import Home from './userHome/Home.jsx'

 import UserProfile from './UserProfile.jsx'
 import Cart from './Cart.jsx'
import WishList from './WishList.jsx'

 export default function UserHome(){
     const [view,setView]=useState('home')
     const [card,setCard]=useState([])
     const [wished,setWished]=useState([])
     console.log("widhed",wished);
     const changeView=(v)=>{
     setView(v)
     return v
     }
    if(view==='home'){
     return <div>
     
     
    <Home changeView={changeView} wished={wished} setWished={setWished}  card={card} setCard={setCard}/>
     </div>
    }
    else   if(view==='profile'){
     return <div>
        <NavBar changeView={changeView}/>
     <UserProfile  changeView={changeView} />
     </div>
    }
    else if(view==='wishlist'){

     return <div>
      <NavBar changeView={changeView}/>
          <WishList wished={wished} setWished={setWished}  changeView={changeView} />
          </div>
    }
    else if(view==="cart"){
        return <div>
             <NavBar changeView={changeView}/>
         <Cart card={card} setCard={setCard}  changeView={changeView} />
         </div>
    }
 }