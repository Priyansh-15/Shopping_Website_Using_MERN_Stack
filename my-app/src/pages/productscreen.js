import React from 'react'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './productscreen.css'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";

import { getProductDetails } from "../redux/actions/productActions";
import { addToCart } from "../redux/actions/cartActions";

const productscreen = ({ match, history }) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.getProductDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    if (product && match.params.id !== product._id) {
      dispatch(getProductDetails(match.params.id));
    }
  }, [dispatch, match, product]);
  const addToCartHandler = () => {
    dispatch(addToCart(product._id, qty));
    history.push(`/cart`);
  };

  return (
    <div className='psc'>
 <Announcement/>

    <Navbar/>
    <div className='mainp'>
    {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
     
        <div class="topnav-left1">
        <div class="product-images">
        <img src={product.imageUrl} alt={product.name} />
    </div>

</div>

<div class="topnav-right1">

<div className="productscreen__right">
<h1 className='titlehead'>{product.name}</h1>
            <div className="right__info">
              
        <p >
                Price:
                <span>Rs.{product.price}</span>
              </p>
              <p>
                Status:
                <span>
                {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                </span>
              </p>
              <p>
                Qty
                <select value={qty} onChange={(e) => setQty(e.target.value)}>
                  {[...Array(product.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
              </p>
              <p>
              <button type="button" onClick={addToCartHandler}>
                  Add To Cart
                </button>
              </p>
    </div>
    </div>
</div>
<div className='des'>
<h1>Description:</h1>
<p>{product.description}</p></div>

        </>
      )}
    </div>
    <Footer/>

    </div>
  )
}

export default productscreen
