import React from 'react'
import con from "../../image/Frame 91.svg"
import "./ServiceList.scss"

const ServiceList = () => {
  return (
    <div className='service-list'>
       <div className='container'>
          <div className='container-top'>
            <div className='top'>
              <p> At Eryoel, we pride ourselves on offering a comprehensive suite of services designed to propel your business into the digital forefront. Our team of experts is dedicated to delivering innovative solutions that not only meet but exceed your expectations. Explore the range of services we provide:
              </p>
            </div>
            <div className='s-list'>
                <div className="row">
                  <div className='list'>
                    <div>
                      <img src={con} alt='icon' />
                    </div>
                    <div className='textContainer'>
                      <h3>Software Development</h3>
                      <p>Creating custom software solutions for businesses and organizations, including web and mobile applications.</p>
                    </div>
                  </div>
                  <div className='list'>
                    <div>
                      <img src={con} alt='icon' />
                    </div>
                    <div className='textContainer'>
                      <h3>IT Consulting</h3>
                      <p>Offering expertise and advice on IT strategy, infrastructure, and technology adoption.</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className='list'>
                    <div>
                      <img src={con} alt='icon' />
                    </div>
                    <div className='textContainer'>
                      <h3>Data Analytics and Business Intelligence</h3>
                      <p>Analyzing data to extract insights and provide data-driven decision-making solutions.</p>
                    </div>
                  </div>
                  <div className='list'>
                    <div>
                      <img src={con} alt='icon' />
                    </div>
                    <div className='textContainer'>
                      <h3>Web Development and Design</h3>
                      <p>Designing and building websites and web applications tailored to client needs.</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className='list'>
                    <div>
                      <img src={con} alt='icon' />
                    </div>
                    <div className='textContainer'>
                      <h3>IoT (Internet of Things)</h3>
                      <p>Building IoT devices and platforms, enabling connectivity and data collection from physical objects.</p>
                    </div>
                  </div>
                  <div className='list'>
                    <div>
                      <img src={con} alt='icon' />
                    </div>
                    <div className='textContainer'>
                      <h3>Digital Marketing</h3>
                      <p>Providing online marketing strategies, SEO, social media management, and digital advertising services.</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className='list'>
                    <div>
                      <img src={con} alt='icon' />
                    </div>
                    <div className='textContainer'>
                      <h3>Hardware Development</h3>
                      <p>Designing and manufacturing hardware components and devices.</p>
                    </div>
                  </div>
                  <div className='list'>
                    <div>
                      <img src={con} alt='icon' />
                    </div>
                    <div className='textContainer'>
                      <h3>Mobile App Development</h3>
                      <p>Creating mobile applications for iOS and Android platforms.</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className='list'>
                    <div>
                      <img src={con} alt='icon' />
                    </div>
                    <div className='textContainer'>
                      <h3>UI/UX Design</h3>
                      <p>Focusing on user interface and user experience design for software and applications.</p>
                    </div>
                  </div>
                  
                </div>
            </div>
          </div>
      
          <div className='container-bottom'>
            <p>At Eryoel, we don't just provide services; we deliver solutions that propel your business forward. Partner with us, and let's embark on a journey of digital transformation together. Your success is our mission.</p>
            </div>
          </div>
       
    </div>
  )
}

export default ServiceList


