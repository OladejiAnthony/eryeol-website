import React from 'react'
import "./TestiPage.scss" 
import TestiCarousel from './testi-carousel/TestiCarousel'

const TestiPage = () => {

  return (
    <div className='testimonial-home-page'>
      <div className='test-wrapper'>
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

export default TestiPage
