import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Slider from '../components/Slider'
import Footer from '../components/Footer'
import Mid from '../components/Mid'
import Mid1 from '../components/Mid1'
import "./Home.css";
import { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'

import { getProducts as listProducts } from "../redux/actions/productActions";
const Home = () => {
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  const {products,loading,error} = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div>
      <Announcement/>
      <Navbar/>
      <Slider/>
      <div class="hedd"><h1>Best selling products</h1></div>
      <div className='producthome'>
      {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map((product) => (
            <Mid
              key={product._id}
              name={product.name}
              description={product.description}
              price={product.price}
              imageUrl={product.imageUrl}
              productId={product._id}
            />
          ))
        )}
        
      </div>
      <h1>Product section</h1>
      <Mid1/>
      <Footer/>

    </div>
  )
}

export default Home;