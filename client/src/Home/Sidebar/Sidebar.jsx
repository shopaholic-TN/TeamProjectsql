import React from 'react'
import './sidebar.css'
import { Slide} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

function Sidebar() {

  const slideImages = [
    {
        url: 'https://i.pinimg.com/736x/f0/f9/e4/f0f9e45724771f16745ad3f6f640d3ce.jpg',
        caption: 'Slide 1'
      },
    {
      url: 'https://img.freepik.com/premium-vector/mega-sale-advertiving-banner-with-3d-illustration-dofferent-home-smart-electronic-devices_348818-574.jpg',
      caption: 'Slide 2'
    },
 
    {
      url: 'https://mediabrief.com/wp-content/uploads/2023/07/Image-vijay-sales-grand-electronics-sale-MediaBrief.jpg',
      caption: 'Slide 4'
    }
  
  ];

    return (
    <div className='flex'>

        <div class="sidebar">
              <nav class="menu">
                <ul>
                  <li><u>Smartphones  </u> </li>
                  <li><u>Phone Cases</u></li>
                  <li><u>Laptops</u></li>
                  <li><u>Bluetooth Speakers</u></li>
                  <li><u>Digital Cameras</u></li>
                  <li><u>Smartwatches</u></li>
                  <li><u>Gaming Accessories</u></li>
                  <li><u>Digital Cameras</u></li>
                </ul>
              </nav>
        </div>

        <div className='sliderDiv'>
            <Slide>
                {slideImages.map((slideImage, index)=> (
                    <div className='slide-container' key={index}>
                    <img className='slide-image' src={`${slideImage.url}`}/>
                  
                    </div>
                ))} 
            </Slide>
        </div>
          
    </div>
     
   
    )
}

export default Sidebar
