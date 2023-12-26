import React from 'react'
import axios from 'axios'
import {useState,useEffect} from 'react'
import Header from './Header.jsx'
import DeleteIcon from '@mui/icons-material/Delete';
import './cart.css'
export default function Cart (props){
  const changeView = props.changeView
  const setCard=props.setCard
  const fetchCard = ()=>{
 axios.get('http://localhost:3001/api/addToCard').then((result)=>{
  setCard(result.data)
  
 }).catch((err)=>{
  console.log(err.message)
 })
  }
useEffect(()=>{
  fetchCard()
},[])
  console.log(props.changeView)
   const deleteProduct=(product)=>{
    const id=product.id
    axios.delete(`http://localhost:3001/api/addToCard/delete/${id}`).then((result)=>{
      console.log(result.data)
      props.setCard(props.card.filter((element)=>{
        return element.id !==result.data.id
      }))
    }).catch(err=>console.log(err.message))
   }
    const [total,setTotal]=useState(0)
    const calculateTotal=(products)=>{
        console.log('calculateTotal works with these products',products)
     let somme = 0
     for(var i=0;i<products.length;i++){
        let price=products[i].productPrice
        somme=somme+price
     }
     
     setTotal(somme)
    }
    const gotohomepage=()=>{
      changeView('home')
    }
    return (
        <div className='cart' >
            {/* <Header changeView={props.changeView} /> */}
            
             
              <h2  style={{marginTop:'30px',color:'red'}}> home/Cart</h2>
            
              <section>
              <div>
                <div className='cart-table-columns'>
                    <div>Product</div>
                    <div>Price</div>
                    <div>Quantity</div>
                    <div>SubTotal</div>
                </div>
                    {props.card.map((p)=>{
                      return(
                        <div className='cart-table-columns'>
                        <div> {p.productName} </div>
                        <div> {p.productPrice} </div>
                        <div>{p.productQuantity} </div>
                        <div>SubTotal</div>
                        <DeleteIcon style={{color:'red',cursor:'pointer'}} onClick={()=>{deleteProduct(p)}} />
                        </div>
                      )
                    })}
              </div>
              </section>

              <div className='check-total'>
                <div className='total-text' >
                <h2>total:</h2>
                <span>   {total}  </span>
                </div>
                <div className='buttons'>
                <button  onClick={()=>{calculateTotal(props.card)}} >check total</button>
                <button onClick={()=>{gotohomepage()}}>go to home page</button>
                </div>
                
              </div>
        </div>
    )
}