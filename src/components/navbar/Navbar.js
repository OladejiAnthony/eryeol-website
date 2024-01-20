import React from 'react'
import "../navbar/Navbar.scss"
import { motion } from 'framer-motion'
import Sidebar from '../sidebar/Sidebar'
import logo from "../../image/eryeol_logo.png"
import { Link } from 'react-router-dom'

const Navbar = () => {
  

  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='top-nav'>
            <Link to="/" className='home-link'>
              <img src={logo} alt='logo' />
            </Link>
            <Link to="/contact" className='contact-link'>
                Contact Us
            </Link>
        </div>
        
        <div className='bottom-nav'>
            <button>Software Development</button>
            <button>IT Consultant</button>
            <button>IoT</button>
            <button>Data Analytics</button>
            <button>Digital Marketing</button>
            <button>Hardware Development </button>
            <button>UI/UX Design</button>
        </div>
       
      </div>
      <Sidebar />
    </div>
  )
}

export default Navbar
