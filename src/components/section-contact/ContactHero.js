import React from 'react'
import "./ContactHero.scss"
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

const ContactHero = () => {
  return (
    <div className='contact-wrapper'>
      <div className='c-top'> 
        <Link to="/contact">Get in Touch</Link>
        <h2>Ready to Elevate Your Digital Presence? Let's Connect and Conquer</h2>
      </div>
      <div className='c-bottom'> 
        <h4>What can we do for you ?</h4>
        <div className='btn'>
            <h3>Web Development and Design</h3>
            <h3>IoT (Internet of Things)</h3>
            <h3>UI/UX Design</h3>
            <h3>Software Development</h3>
            <h3>Data Analytics and BI</h3>
            <h3>IT Consulting</h3>
            <h3>Digital Marketing</h3>
            <h3>Mobile App Development</h3>
            <h3>Hardware Development</h3>
        </div>
      </div>
      <Helmet>
        <title>Eryeol-Inc Contact Page</title>
        <meta name="description" content="This is the contact page of Eryeol Incorporation official website. Contact us and let's discuss business." />
      </Helmet>
      
    </div>
  )
}

export default ContactHero


