import React from 'react'
import { Link } from 'react-router-dom';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import "./signup.css";

const signup = () => {
  return (
    <div>
      <div>
      <Announcement/>
  <Navbar/>
  </div>

      <div className='signuppage'>
      <center><img src="https://cdn3.iconfinder.com/data/icons/flat-rounded-5/50/424-512.png" class="logo" alt=""></img> </center>
    <div>
      <center>
        <input type="text" autocomplete="off" id="name" placeholder="name"></input>
        <input type="email" autocomplete="off" id="email" placeholder="email"></input>
        <input type="password" autocomplete="off" id="password" placeholder="password"></input>
        <input type="text" autocomplete="off" id="number" placeholder="number"></input>
        <input type="checkbox" checked class="checkbox" id="terms-and-cond"></input>
        <label for="terms-and-cond">agree to our <a href="">terms and conditions</a></label>
<br></br>
        <input type="checkbox" class="checkbox" id="notification"></input>
        <label for="notification"><a href="">recieve upcoming offers and events mails</a></label>
        <button class="submit-btn">create account</button>
        </center>
    </div>
    <center><Link to='/logi'>Already have an account? Log in here</Link></center>
  <Footer/>
  </div>
    </div>
  )
}

export default signup
