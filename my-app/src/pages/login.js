import React from 'react'
import { Link } from 'react-router-dom';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

import "./login.css";
const login = () => {
  return (
    <div>
      <div>
      <Announcement/>
  <Navbar/>
  </div>

      <div className='loginpage'>
      <center><img src="https://cdn3.iconfinder.com/data/icons/flat-rounded-5/50/424-512.png" class="logo" alt=""></img> </center>
    <div>
      <center>
        <input type="email" autocomplete="off" id="email" placeholder="Registered email"></input>
        <input type="password" autocomplete="off" id="password" placeholder="password"></input>
<br></br>
        <input type="checkbox" class="checkbox" id="notification"></input>
        <label for="notification"><a href="">recieve upcoming offers and events mails</a></label>
        <button class="submit-btn">Login</button>
        </center>
    </div>
  <Footer/>
  </div>
      
    </div>
    

  )
}

export default login
