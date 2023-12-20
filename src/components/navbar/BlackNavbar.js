import React from 'react'
import "../navbar/BlackNavbar.scss"
import Sidebar from '../sidebar/Sidebar'
import logo from "../../image/eryeol_logo.png"

const WhiteNavbar = () => {
  return (
    <div className='black-navbar'>
      <div className='b-container'>
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
