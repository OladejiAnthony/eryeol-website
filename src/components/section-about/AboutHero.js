import React from 'react'
import "./AboutHero.scss"
import Mission from './Mission'
import Values from './Values'
import Team from './Team'
import Choose from './Choose'
import Awards from './Awards'
import WFooterHead from "../footer/WFooterHead"
import WhiteFooter from '../footer/WhiteFooter'
import Testimonials from './Testimonials'
import { Link } from 'react-router-dom'


const AboutHero = () => {
  return (
    <div className='about-hero'>
      <div className='about-top'> 
        <Link to="/about-us">About us</Link>
        <h2>Born of Passion, Driven by Innovation.</h2>
      </div>
      <Mission />
      <Values />
      <Team />
      <Choose />
      <Testimonials />
      <Awards />
      <WFooterHead />
      <WhiteFooter />
    </div>
    
  )
}

export default AboutHero


