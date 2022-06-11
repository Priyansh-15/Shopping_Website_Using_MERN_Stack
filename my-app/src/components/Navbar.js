import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = ({ click }) => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };
  return (

    <nav class="navbar">
    <div class="nav">
    <div class="topnav-left">
      <Link to="/" >
    <div class="brand-logo">
    <img src="https://i.ibb.co/DkgZdvp/logo.png" alt="brandlogo" width="250" height="70">
    </img>
    </div>
    </Link>
    </div>
    <div className='topnav-centered'>  
    
        <div className='search'>
        <span class="material-icons-outlined">
</span>
            <input type="text" class="search-box" placeholder="search brand, product">
            </input>
            <button class="search-btn">search</button>
        </div>
        </div>
        <div className='topnav-right'>
        <div class="login"><Link to="/logi">Login</Link></div>
        <div class="sign">
        <Link to="/signu">Sign up</Link></div>
        
        <div>
     
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
          </link>
          <Link to="/cart">
          <i class="fa fa-shopping-cart fa_custom fa-2x"></i>
          
     
            <span class='badge badge-warning' id="getCartCount">{getCartCount()}</span>
            
            </Link>
            </div>
            </div>
    </div>
    
    <div class="nextlink">
<ul class="links-container">
            <li class="link-item"><a href="#footer" class="link">About</a></li>
            <li class="link-item">
              
            <div class="dropdown">
    <button class="dropbtn">Clothing
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <a href="#">Men </a>
      <a href="#">Women</a>
      <a href="#">Kids</a>
    </div>
    </div>
        </li>
            <li class="link-item"><a href="#" class="link">Accessories</a></li>
            <li class="link-item"><a href="#footer" class="link">Customer servies</a></li>
        </ul>
</div>
</nav>
    

  );
};

export default Navbar;

