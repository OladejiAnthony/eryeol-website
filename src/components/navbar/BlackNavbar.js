import React from 'react'
import "../navbar/BlackNavbar.scss"
import Sidebar from '../sidebar/Sidebar'
import logo from "../../image/eryeol_logo.png"
import { Link } from 'react-router-dom'

const WhiteNavbar = () => {
  return (
    <div className='black-navbar'>
      <div className='b-container'>
        <div className='nav'>
            <Link to="/" className='home-link'>
              <img src={logo} alt='logo' />
            </Link>
            <Link to="/contact" className='contact-black-link'>
                Contact Us
            </Link>
        </div>
       
      </div>
      <Sidebar />
    </div>
  )
}

export default WhiteNavbar
