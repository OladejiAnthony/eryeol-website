import React from 'react'
import  "../Hero/Hero.scss"
import { Link } from 'react-router-dom'

const LinkBtn = (
  <div>
    Get in touch
    <Link to="/contact" className='svg'>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" stroke='white' viewBox="0 0 16 16" fill="none">
        <path  fill-rule="evenodd" clip-rule="evenodd" d="M9.34315 1.29289L15.7071 7.65686C16.0976 8.04738 16.0976 8.68054 15.7071 9.07107L9.34314 15.435C8.95262 15.8256 8.31945 15.8256 7.92893 15.435C7.53841 15.0445 7.53841 14.4113 7.92893 14.0208L12.5858 9.36396L-7.31201e-07 9.36396L-5.56355e-07 7.36396L12.5858 7.36396L7.92893 2.70711C7.53841 2.31658 7.53841 1.68342 7.92893 1.29289C8.31946 0.90237 8.95262 0.90237 9.34315 1.29289Z" fill="white"/>
      </svg>
    </Link>
  </div>
)

const Hero = () => {
  return (
    <div className='hero'>
      <div className='text-box'>
        Everything <span>Technology</span>
      </div>
      <div className=' btn'>
        <button>
            Learn more
        </button>
        <svg xmlns="http://www.w3.org/2000/svg" width="81" height="80" viewBox="0 0 81 80" fill="none">
            <rect x="1" y="0.5" width="79" height="79" rx="39.5" stroke="white" stroke-opacity="0.4"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M39.5 49.5858V27H41.5V49.5858L46.1569 44.9289C46.5474 44.5384 47.1806 44.5384 47.5711 44.9289C47.9616 45.3195 47.9616 45.9526 47.5711 46.3431L41.2071 52.7071C40.8166 53.0976 40.1834 53.0976 39.7929 52.7071L33.4289 46.3431C33.0384 45.9526 33.0384 45.3195 33.4289 44.9289C33.8195 44.5384 34.4526 44.5384 34.8432 44.9289L39.5 49.5858Z" fill="white"/>
        </svg>
      </div>
      <div className='bottom-btn'>
        <p>We are a one stop technology and innovation agency. With years of great <span>achievements and delivering quality products and services to our ambitious clients</span></p>
        {LinkBtn}
      </div>
    </div>
  )
}

export default Hero

