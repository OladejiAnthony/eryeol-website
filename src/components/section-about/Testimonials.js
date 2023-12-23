import React from 'react'
import "./Testimonials.scss"
import TestiCarousel from '../section-home/testi-carousel/TestiCarousel'

const Testimonials = () => {
  return (
    <div className='testimonials'>
      <div className='t-wrapper'>
      <div className='top'>
          <button>Testimonials</button>
          <h1>They trust us, you should too</h1>
        </div>
        <div className='middle'>
        <TestiCarousel />
        </div>
      </div>
    </div>
  )
}

export default Testimonials
