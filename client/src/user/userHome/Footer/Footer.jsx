import React from 'react'
import './footer.css'
import { useNavigate } from 'react-router-dom'


function Footer() {

    return (
        <footer className="footer-distributed">

      <div>

        <div className='footerList'>

        <div className='list'>              
               <h3>Exclusive</h3>
               <h4>Subscribe</h4>
               <h5>Get 10% off your first order</h5>
               <input placeholder='Enter your email'/>
            </div>

            <div className='list'>              
               <h3>Support</h3>
               <h4>Lorem ipsum dolor sit amet consectetur adipisicing</h4>
               <h5>test-test@gmail.com</h5>
               <h5>1245-4523-3569</h5>
           
            </div>

            <div className='list'>              
               <h3>Account</h3>
               <h4>My Account</h4>
               <h4>Login/Register</h4>
               <h4>card</h4>
               <h4>WishList</h4>
               
            </div>

            
            <div className='list'>              
               <h3>Privacy Policy</h3>
               <h4>Tearm of use</h4>
               <h4>FAQ</h4>
               <h4>Contact</h4>
        
            </div>

            <div className='list'>              
               <h3>Download App</h3>
               <h4>Subscribe</h4>

               <img src='https://thumbs.dreamstime.com/b/google-play-app-store-pictogrammen-download-van-pay-editable-vectorillustratie-op-ge%C3%AFsoleerde-witte-achtergrond-ai-illustratie-177051728.jpg' style={{width:'150px', height:"80px"}}/> 
            </div>


        </div>
            
            <p className="footer-company-name">Copyright © 2021 <strong>SagarDeveloper</strong> All rights reserved</p>
        </div>
    </footer>
        
    )
}

export default Footer
