import React from 'react'
import "../navbar/WhiteNavbar.scss"
import Sidebar from '../sidebar/Sidebar'
import logo from "../../image/black-logo.png"

const WhiteNavbar = () => {
  return (
    <div className='white-navbar'>
      <div className='container'>
        <div className='nav'>
            <img src={logo} alt='logo' />
            <button>
                Contact Us
            </button>
        </div>
       
      </div>
      <Sidebar />
    </div>
  )
}

export default WhiteNavbar
