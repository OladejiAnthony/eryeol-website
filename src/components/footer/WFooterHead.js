/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import "../footer/WFooterHead.scss"
import { Link } from 'react-router-dom';


const WFooterHead = () => {

  return (
    <div className='white-foot-head'>
        <div className='white-wrapper'>
          <div className='white-top'>
            <p>Let’s plunge you into your world of possibilities</p>
          </div>

          <div className='white-bottom'
          >
             <p className='boxItem'>
              Ready for a Digital Revolution ?
            </p>
            <Link to="/contact" className='boxItem'>
              Get in Touch
            </Link>
          </div>
        </div>
    </div>
  )
}

export default WFooterHead

