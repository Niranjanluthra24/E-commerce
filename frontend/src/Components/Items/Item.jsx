import React from 'react'
import "./Item.css"
import { Link } from 'react-router-dom'
export  const Item = (props) => {
  return (
    <div className='item'>
      <Link to={`/product/${props.itemobj.id}`}><img onClick={window.scrollTo(0,0)} src={props.itemobj.image} alt="" /></Link> 
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
