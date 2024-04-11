import React from 'react'
import "./Item.css"
export const Item = (props) => {
  return (
    <div className='item'>
       <img src={props.itemobj.image} alt="" />
       <p>{props.itemobj.name}</p>
       <div className="item-prices">
        <div className="item-price-new">
           ${props.itemobj.new_price}
        </div>
         <div className="item-price-old">
           ${props.itemobj.old_price}
         </div>
       </div>
    </div>
  )
}
