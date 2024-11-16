import React from 'react'
import './Header.css'
import '../../App.css'
import Logo from '../../homePage/imgHome/Logo.png'

const Header = () => {
  return (
    <div className="header_page">
      <div className="brand">
        <img src={Logo} alt="logo" />
        <p>STAMINA <br />FITNESS</p> 
      </div>
      <div className="menu_item">
        <a href="" className="menu_button">
          <p>About</p>
        </a>
        <a href="" className="menu_button">
          <p>Why Join Us?</p>
        </a>
        <a href="" className="menu_button">
          <p>Plan</p>
        </a>
        <a href="" className="menu_button">
          <p>Coaches</p>
        </a>
        <a href="" className="menu_button">
          <p>Visit our Gym</p>
        </a>
        <a href="" className="register menu_button">
            <p>Register</p>
        </a>
      </div>
    </div>
  )
}

export default Header