import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product";
export const ShopContext = createContext(null);


const getDefaultCart = ()=>{
    let cart = {};
    for(let index =0;index<all_product.length+1 ;index++){
     cart[index]=0;
    }
    return cart
}

const ShopContextProvider =(props)=>{
    const [cartItems,setcartItems] = useState(getDefaultCart());
     const addToCart = (itemId)=>{

       
        setcartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
        // console.log(cartItems[itemId]);
       
        
     }
     const removeFromCart = (itemId)=>{
        
        setcartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
       
       
        // for(const items in cartItems){
        //      count+=cartItems[items];
        // }
        // window.CartCount=count+1;
    
        // console.log(cartItems[itemId]);
     }
     const getTotalCartItems =()=>{

        let totalItem=0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                totalItem+=cartItems[item];
            }
        }
        return totalItem;
     }
     const getTotalCartAmount = () =>{
        let total = 0;
        // console.log(cartItems);
        for(const item in cartItems){
            // console.log(item);
            if(cartItems[item]>0){
                console.log(cartItems[item]);
                let itemInfo = all_product.find((product)=>product.id===Number(item));
                total+=itemInfo.new_price*cartItems[item];
            }
          
        }
        return total;
     }
    const contextValue = {getTotalCartItems,getTotalCartAmount,all_product,cartItems,addToCart,removeFromCart};
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export  default ShopContextProvider;