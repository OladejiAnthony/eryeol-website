import React from 'react'
import logo from "../../image/eryeol_logo.png"
import MenuLinks from "../sidebar/links/MenuLinks"
import "../footer/Footer.scss"

const Footer = () => {
    
  return (
    <div className='footer'>
      <div className='wrapper'>
        <img src={logo} alt='logo' />
        <div className='foot'>
            <MenuLinks />
        </div>
      </div>
    </div>
  )
}

export default Footer
