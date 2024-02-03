import React from 'react'
import "./ContactHero.scss"
import { Link } from 'react-router-dom'
import SEO from '../../SEO/SEO';


const ContactHero = () => {

  return (
    <div className='contact-wrapper'>
      <SEO
        title="Eryeol Contact"
        description="Get in touch with us to find out how our technology solutions, inspired by the best in the industry, can help you or your business thrive. Whether you have a question, need support, or are looking to collaborate, we are here to help you navigate the future of tech."
        keywords="Technology, Tech products, Electronics, Smart device manufacturing, Next-gen telecommunications, AI and machine learning services, mobile, internet of things, renewable enrgy, cloud computing, virtual reality, augumented reality, cyber security, data protection."
        url='https://www.eryeol.com/contact'
      />
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
      
    </div>
  )
}

export default ContactHero


