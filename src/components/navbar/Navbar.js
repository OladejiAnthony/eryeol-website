import React from 'react'
import "../navbar/Navbar.scss"
import { motion } from 'framer-motion'
import Sidebar from '../sidebar/Sidebar'
import logo from "../../image/eryeol_logo.png"
import { Link } from 'react-router-dom'

const Navbar = () => {
  const slidingVariants = {
    initial : {
      x: 0,
    },
    animate: {
        x: "-30%",
        transition: {
          repeat: Infinity,
          repeatType: "mirror",
          duration: 8,
        }
    }
  }

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
        
        <motion.div 
          className='bottom-nav'
          variants={slidingVariants}
          initial="initial"
          animate="animate"
        >
            <button>Software Development</button>
            <button>IT Consultant</button>
            <button>IoT</button>
            <button>Data Analytics</button>
            <button>Digital Marketing</button>
            <button>Hardware Development </button>
            <button>UI/UX Design</button>
        </motion.div>
        <div className='left-blur'></div>
        <div className='right-blur'></div>
      </div>
      <Sidebar />
    </div>
  )
}

export default Navbar
