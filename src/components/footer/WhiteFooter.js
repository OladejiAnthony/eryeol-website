import React from 'react'
import "../footer/WhiteFooter.scss"
import MenuLinks from "../sidebar/links/MenuLinks"
import logo from "../../image/black-logo.png"

function WhiteFooter() {
    
    return (
      <div className='white-footer'>
        <div className='white-wrapper'>
          <img src={logo} alt='logo' />
          <div className='foot'>
              <MenuLinks />
          </div>
        </div>
      </div>
    )

}

export default WhiteFooter

