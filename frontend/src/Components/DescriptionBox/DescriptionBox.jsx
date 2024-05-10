import React from 'react'
import './DescriptionBox.css';
export const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>An e-commerce website is an online platform that facilitate buying and selling of products or services over the internet and serves as virtual marketplace where businesses and individual showcase their products, interact with customers,conduct the transactions without the need of physical presence.E-commerce website have gained immense popularity due to their convienence , accessibility,and the global reach they offer.</p>
        <p>E-commerce websites display products or services along with detailed descriptions,images,prices,and any available variations(sizes,colors).Each product have its own dedicated page with relevant information.</p>
      </div>

    </div>
  )
}
