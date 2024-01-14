import React from 'react'
import "../section-home/AboutPage.scss"
import { Link } from 'react-router-dom'

const AboutPage = () => {

    const AbtBtn = (
        <div>
          About Us
          <Link to="/about-us" className='svg'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" stroke='white' viewBox="0 0 16 16" fill="none">
              <path  fill-rule="evenodd" clip-rule="evenodd" d="M9.34315 1.29289L15.7071 7.65686C16.0976 8.04738 16.0976 8.68054 15.7071 9.07107L9.34314 15.435C8.95262 15.8256 8.31945 15.8256 7.92893 15.435C7.53841 15.0445 7.53841 14.4113 7.92893 14.0208L12.5858 9.36396L-7.31201e-07 9.36396L-5.56355e-07 7.36396L12.5858 7.36396L7.92893 2.70711C7.53841 2.31658 7.53841 1.68342 7.92893 1.29289C8.31946 0.90237 8.95262 0.90237 9.34315 1.29289Z" fill="white"/>
            </svg>
          </Link>
        </div>
    )

  return (
    <div className='about-home-page'>
      <div className='wrapper'>
        <div className='top'>
            <button>Our Mission</button>
            <div>
                <h3>Service</h3>
                <h3>Tech Solution</h3>
            </div>   
        </div>
        <div className='center'>
            <p>
            To revolutionize the way the world interacts with technology, by creating groundbreaking products and services that enhance lives, empower businesses, and contribute to a sustainable future, while fostering a culture of innovation, diversity, and social responsibility.
            </p>
        </div>
        <div className='bottom'>
            {AbtBtn}
        </div>
      </div>
    </div>
  )
}

export default AboutPage


