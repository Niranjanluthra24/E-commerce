import React, { useContext, useState } from 'react'
import "./Navbar.css"
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { ShopContext } from '../../Context/ShopContext';
import { Link } from 'react-router-dom';
export const Navbar = (props) => {
    const [menu,setMenu] = useState("Shop");
    const {cartItems} = useContext(ShopContext);
  return (
    <div className='navbar'>
     <div className='nav-logo'>
        <img src={logo} alt="Logo"/>
        <p>SHOPNOW</p>
     </div>
     <ul className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}} to="/">Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:'none'}} to="/mens">Men</Link>{menu==="mens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:'none'}} to="/womens">Women</Link>{menu==="womens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none'}} to="/kids">Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
     </ul>
     <div className='nav-login-cart'>
       <Link style={{textDecoration:'none'}} to="/login"><button>Login</button></Link> 
        <Link style={{textDecoration:'none'}} to="/cart"><img  src={cart_icon} alt="Cart Icon"/></Link>
        <div className="nav-cart-count">{window.CartCount}</div>
     </div>
    </div>
  )
}
