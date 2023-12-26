import React from 'react'
import axios from 'axios'
import {useEffect,useState} from 'react'
import './elementCart.css'
import DeleteIcon from '@mui/icons-material/Delete';
import './wishlist.css'
export default function WishList(props){
    console.log(props);
    const [loading,setLoading]=useState(false)
    const changeView = props.changeView
    const goToHome=()=>{
        changeView("home")
    }
    const fetchAll=()=>{
        axios.get("http://localhost:3001/api/wishList").then((results)=>{
            console.log(results);
            props.setWished(results.data)
        }).then(()=>{
            setLoading(true)

        }).catch((err)=>{
            console.log('erronfetch wishlist:',err.message)
        })
    }
    useEffect(()=>{
        fetchAll()
    },[])
    const deletWished=(product)=>{
        axios.delete(`http://localhost:3001/api/wishList/${product.wishListName}`).then((results)=>{
            props.setWished(props.wished.filter((wish)=>{
                return wish.wishListName !== product.wishListName
            }))
            console.log(results.data)
        }).catch((err)=>{
            console.log(err)
        })
    }
    return (
        <div  className="wishlist">
        {loading  ?<div>
            {props.wished.map((wishedProduct,i)=>{
                console.log(wishedProduct);
                return(
                    <div key={i}  className='cart-table-columns' >
                <div>
                
                <img src={wishedProduct.wishListImage.url?wishedProduct.wishListImage.url:''} alt="no-content" />
                </div>
                <div className='product-name'> {wishedProduct.wishListName} </div>
                <div className='product-details'> {wishedProduct.wishListDescription} </div>
                <DeleteIcon  onClick={()=>{deletWished(wishedProduct)}} />
                <div> {wishedProduct.wishListPrice} </div>
            </div>
               )
            })}
           
        </div>:"loading"}
        <button  onClick={()=>goToHome()}>goToHome</button>
            
        </div>
    )
}