import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import UserHome from '../src/user/UserHome.jsx'
//import ProductDet from './user/userHome/Components/SingleProduct/ProductDet.jsx';
import './App.css';
function App() {
  return (
    <div className="App">
 
<BrowserRouter>
      <Routes>


        <Route path="/userHome" element={<UserHome/>}>
          
       
        </Route>
      </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
