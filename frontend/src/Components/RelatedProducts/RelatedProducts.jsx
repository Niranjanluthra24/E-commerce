import React from 'react'
import './RelatedProducts.css'

import all_product from '../Assets/all_product';
import {Item} from '../Items/Item'
export const RelatedProducts = (props) => {
  return (
    <div className='relatedproducts'>
        <h1>Related Products</h1>
        <hr />
        <div className="relatedproducts-item">
          {all_product.filter(item=>item.category===props.category).map((item,i)=>{
            if(i<4){
            return <Item key={i} itemobj=  {item}/>;}
            else{
              return null;
            }
          })}
        </div>
    </div>
  )
}

