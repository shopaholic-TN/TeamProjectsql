import {React,useState,useEffect }from 'react'
import axios from 'axios'
import FavoriteIcon from '@mui/icons-material/Favorite';
import './AllProducts.css'
export default function AllProducts(){
    const [products,setProducts]=useState([])
    const getProducts = ()=>{
        axios.get("http://localhost:3000/api/allProducts").then((results)=>{
            setProducts(results.data)
            console.log(products)
        }).catch(err=>console.log(err))
    }
    useEffect(()=>{
        getProducts()
    }
       ,[])
return (
    <div>
        <h3>Explore Our Products</h3>
        <div className='product-container'>
    {products.map((product,i)=>{
        return(
            <div key={i} className='product-card' >
                <div>
                <FavoriteIcon color="secondary" fontSize="large" />
                <img src= {product.productImage} alt="no-content" />
                </div>
                <div className='product-name'> {product.name} </div>
                <div className='product-details'> {product.productDescription} </div>
                <div> {product.price} </div>
            </div>

        )
    })}
    </div>
    
    </div>
)

}
    