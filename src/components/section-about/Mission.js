import React from 'react'
import "./Mission.scss"
import dart from "../../image/dart.svg"
import ellipse from "../../image/Ellipse.svg"

const Mission = () => {

  return (
    <div className='mission'>
        <div className='wrapper'>
            <div className='left'>
            <img src={dart} alt='img' />
            </div>
            <div className='right'>
            <div className='top'>
                <button>Our Mission</button>
                <h3>Empowering businesses through cutting-edge technology</h3>
                <div>
                <img src={ellipse} alt='' />
                </div>
            </div>
            <p>We believe that the right technology has the power to transform not just businesses but entire industries. Our commitment is to be the driving force behind your digital success story.</p>
            </div>
        </div>
        
      </div>
  )
}

export default Mission
