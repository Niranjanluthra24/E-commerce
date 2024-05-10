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
        window.CartCount+=(cartItems[itemId]+1);
     }
     const removeFromCart = (itemId)=>{
        setcartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
        window.CartCount-=(cartItems[itemId]);
        // console.log(cartItems[itemId]);
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
            return total;
        }
     }
    const contextValue = {getTotalCartAmount,all_product,cartItems,addToCart,removeFromCart};
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export  default ShopContextProvider;