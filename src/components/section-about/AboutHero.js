import React from 'react'
import "./AboutHero.scss"
import Mission from './Mission'
import Values from './Values'
import Team from './Team'
import Choose from './Choose'
//import Awards from './Awards'
import WFooterHead from "../footer/WFooterHead"
import WhiteFooter from '../footer/WhiteFooter'
//import Testimonials from './Testimonials'
import { Link } from 'react-router-dom'
import SEO from '../../SEO/SEO'



const AboutHero = () => {

  return (
    <div className='about-hero'>
      <SEO
        title="Eryeol About Us"
        description="Learn about our journey to becoming a tech innovator, drawing inspiration from tech leaders worldwide. Our story is one of passion, dedication, and a relentless pursuit of excellence in technology. Find out what drives us and how we are making a difference in the tech landscape."
        keywords="Technology, Tech products, Electronics, Smart device manufacturing, Next-gen telecommunications, AI and machine learning services, mobile, internet of things, renewable enrgy, cloud computing, virtual reality, augumented reality, cyber security, data protection."
        url='https://www.eryeol.com/about-us'
      />
      <div className='about-top'> 
        <Link to="/about-us">About us</Link>
        <h2>Born of Passion, Driven by Innovation.</h2>
      </div>
      <Mission />
      <Values />
      <Team />
      <Choose />
      {/* <Testimonials /> */}
      {/* <Awards /> */}
      <WFooterHead />
      <WhiteFooter />
    </div>
    
  )
}

export default AboutHero


