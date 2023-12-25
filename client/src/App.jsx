import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AdminSpace from './admin/AdminSpace';
import ListOfProduct from './admin/ListOfProduct';
import ListOfRegistred from './admin/ListOfRegistred.jsx'
import ListOfSeller from './admin/ListOfSeller.jsx';
import ADDDD from './admin/AdminHome.jsx';


function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/home ' element={<AdminSpace/>}/>
    <Route path='/product' element={<ListOfProduct/>}/>
    <Route path='/user' element={<ListOfRegistred/>}/>
    <Route path='/seller' element={<ListOfSeller/>}/>
    <Route path='/firstPage' element={<ADDDD/>}/>

   </Routes>
   </BrowserRouter>
  );
}

export default App;
