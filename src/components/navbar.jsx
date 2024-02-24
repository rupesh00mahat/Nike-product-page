import React from 'react'
import '../style.css'
import  Nike from '../assets/brand_logo.png'

function Navbar(props) {
  return (
    <div id='nike-navbar'>
        <img src={Nike}/>
        <ul>
          <li>MENU</li>
          <li>LOCATION</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
        </ul>
        <button className='navbar-login-button'>
          Login
        </button>
    </div>
  )
}

export default Navbar;