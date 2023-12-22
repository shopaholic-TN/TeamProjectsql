import {React,useState} from 'react'
import Header from './Header.jsx'
 import Categories from '../homeComponents/Categories.jsx'
 import AllProducts from '../homeComponents/AllProducts.jsx'
 import UserProfile from './UserProfile.jsx'
import WishList from './WishList.jsx'
 export default function UserHome(){
     const [view,setView]=useState('home')
     const changeView=(v)=>{
     setView(v)
     return v
     }
    if(view==='home'){
     return <div>
     <Header changeView={changeView}/>
     <Categories/>
     <AllProducts/>
     </div>
    }
    else   if(view==='profile'){
     return <div>
     <UserProfile  changeView={changeView} />
     </div>
    }
    else if(view==='wishlist'){

     return <div>
       
         <WishList changeView={changeView} /> </div>
    }
 }