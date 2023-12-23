import React from 'react'
import "../navbar/WhiteNavbar.scss"
import Sidebar from '../sidebar/Sidebar'
import logo from "../../image/black-logo.png"
import { Link } from 'react-router-dom'

const WhiteNavbar = () => {
  return (
    <div className='white-navbar'>
      <div className='container'>
        <div className='nav'>
            <Link to="/" className='home-link'>
              <img src={logo} alt='logo' />
            </Link>
            <Link to="/contact" className='contact-link'>
                Contact Us
            </Link>
        </div>
       
      </div>
      <Sidebar />
    </div>
  )
}

export default WhiteNavbar
