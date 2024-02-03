import React from 'react'
import "./ServiceHero.scss"
import Arrow from "../../image/black-arrow.svg"
import SEO from '../../SEO/SEO'

const ServiceHero = () => {

  const LinkBtn = (
    <button to="/">
      Our Services
    </button>
  )

  return (
    <div className='service-hero'>
      <SEO
        title="Eryeol Services"
        description="Explore our diverse array of services, from advanced AI solutions to sustainable tech. Whether you are seeking innovative software, smart devices, or groundbreaking technologies, discover how our services can elevate your experience."
        keywords="Technology, Tech products, Electronics, Smart device manufacturing, Next-gen telecommunications, AI and machine learning services, mobile, internet of things, renewable enrgy, cloud computing, virtual reality, augumented reality, cyber security, data protection."
        url='https://www.eryeol.com/services'
      />
      <div className='container'>
        {LinkBtn}
        <div className='text-box'>
          Unlocking Possibilities, Delivering Excellence.
        </div>
        <a href="/services" className=' btn'>
          <button>
              Explore our Services
          </button>
          <img src={Arrow} alt='black-arrow' />
          {/* <svg xmlns="http://www.w3.org/2000/svg" width="81" height="80" viewBox="0 0 81 80" fill="none">
              <rect x="1" y="0.5" width="79" height="79" rx="39.5" stroke="black" stroke-opacity="0.4"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M39.5 49.5858V27H41.5V49.5858L46.1569 44.9289C46.5474 44.5384 47.1806 44.5384 47.5711 44.9289C47.9616 45.3195 47.9616 45.9526 47.5711 46.3431L41.2071 52.7071C40.8166 53.0976 40.1834 53.0976 39.7929 52.7071L33.4289 46.3431C33.0384 45.9526 33.0384 45.3195 33.4289 44.9289C33.8195 44.5384 34.4526 44.5384 34.8432 44.9289L39.5 49.5858Z" fill="white"/>
          </svg> */}
        </a>
      </div>
    </div>
  )
}

export default ServiceHero
