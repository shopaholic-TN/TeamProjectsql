import React from 'react'
import './newArrival.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCalendarDay, faNewspaper} from "@fortawesome/free-solid-svg-icons"
function NewArrival() {
    return (
        <div>
             <h1 style={{marginLeft:'65px'}}><FontAwesomeIcon icon={faNewspaper} /><span style={{color:'red',fontWeight:'600px'}}>New Arrival</span></h1>

             <div class="image-grid">
                <div class="image-item">
                    <img src="https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image 1"/>
                    <div class="image-caption">Caption for Image 1</div>
                </div>
                <div class="image-item">
                    <img src="https://images.unsplash.com/photo-1631863552122-3072cf599a46?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image 2"/>
                    <div class="image-caption">Caption for Image 2</div>
                </div>
                <div class="image-item">
                    <img src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image 3"/>
                    <div class="image-caption">Caption for Image 3</div>
                </div>
                <div class="image-item">
                    <img src="https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=1957&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image 4"/>
                    <div class="image-caption">Caption for Image 4</div>
                </div>
            </div>
        </div>
    )
}

export default NewArrival
