/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import bg from "../../image/world-img.png"
import "../footer/FootHead.scss"

const FootHead = () => {
  return (
    <div className='foot-head'>
        <div className='wrapper'>
          <div className='foot-bg0img'>
            <img src={bg} alt='image'  />
          </div>
          <div className='top'>
            <p>Let’s plunge you into your world of possibilities</p>
          </div>
          <div className='bottom'>
             <p>Ready for a Digital Revolution ?</p>
             <h1>Get in Touch</h1>
          </div>
        </div>
    </div>
  )
}

export default FootHead
