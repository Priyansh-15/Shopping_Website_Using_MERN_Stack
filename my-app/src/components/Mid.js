import React from 'react'
import { Link } from "react-router-dom";
import "./Mid.css";
const Mid = ({imageUrl, description, price, name, productId} ) => {
  return (
   
 
      <div class="products">
     <Link to={`/product/${productId}`} className="info__button">
    <div class="product-card">
        <div class="product-image">
            <span class="discount-tag">50% off</span>
            <img src={imageUrl} class="product-thumb" alt={name}>
            </img><button class="card-btn">View Description</button>
        </div>
        <div class="product-info">
            <h2 class="product-brand">{name}</h2>
            <br></br>
            <p class="product-short-des">Description:-{description}</p>
            <span class="price">Rs.{price}</span>
        
    </div>
</div>
</Link>
</div>
  )
}

export default Mid
