import React from 'react'
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserHome from './userHome/UserHome.jsx';
// import Cart from '../userhome/Cart.jsx'
// import WishList from '../userhome/WishList.jsx'

import './App.css';
function App() {
  return (
    <div className="App">
 < UserHome/>
 { /*<BrowserRouter>
      <Routes>
        <Route path="/CartUser" element={<Cart />}>
          
        </Route>
        
        <Route path="/" element={<Header />}>

        </Route>
        <Route path='/WishListUser' element={<WishList/>}>

        </Route>
      </Routes>
  </BrowserRouter>*/ }
    </div>
  );
}

export default App;
