import React from 'react'
import "../navbar/Navbar.scss"
import Sidebar from '../sidebar/Sidebar'
import logo from "../../image/eryeol_logo.png"

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='top-nav'>
            <img src={logo} alt='logo' />
            <button>
                Contact Us
            </button>
        </div>
        <div className='bottom-nav'>
            <button>Software DEVELOPMENT</button>
            <button>IoT</button>
            <button>IT Consultant</button>
            <button>Data Analytics and Business Intelligence</button>
        </div>
      </div>
      <Sidebar />
    </div>
  )
}

export default Navbar
