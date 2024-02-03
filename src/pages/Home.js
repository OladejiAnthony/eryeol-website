import React from 'react'
import "../pages/Home.scss"
import Navbar from '../components/navbar/Navbar'
import Hero from '../components/Hero/Hero'
import ServicePage from '../components/section-home/ServicePage'
import AboutPage from '../components/section-home/AboutPage'
//import ProjectPage from '../components/section-home/ProjectPage'
//import TestiPage from '../components/section-home/TestiPage'
import Footer from '../components/footer/Footer'
import FootHead from '../components/footer/FootHead'

import SEO from '../SEO/SEO';


function Home() {
 
  // const ogData = {
  //   title: 'Eryeol Incorporation',
  //   description: 'This is Eryeol Incorporation official website. We serve you with everything technology.',
  //   url: 'https://www.eryeol.com',
  //   siteName: 'Eryeol',
  // };
  

  return (
    
    <section className='homePage'>
      <SEO
        title="Eryeol Home"
        description="Dive into the world of next-gen technology with us at Eryeol, where innovation meets practicality. Inspired by tech giants, we offer a range of cutting-edge products and services designed to propel you into the future. Discover how we are shaping tomorrow, today."
        keywords="Technology, Tech products, Electronics, Smart device manufacturing, Next-gen telecommunications, AI and machine learning services, mobile, internet of things, renewable enrgy, cloud computing, virtual reality, augumented reality, cyber security, data protection."
        url='https://www.eryeol.com'
      />
      {/* <Helmet>
        // Open Graph Meta Tags 
        <meta property="og:title" content={ogData.title} />
        <meta property="og:description" content={ogData.description} />
        <meta property="og:url" content={ogData.url} />
        <meta property="og:site_name" content={ogData.siteName} />
        <meta name="description" content={ogData.description} />
      </Helmet> 
      */}

      <div className='bg-img'>
        <Navbar />
        <Hero />
      </div>
      <ServicePage />
      <AboutPage />
      {/* <ProjectPage /> */}
      {/* <TestiPage /> */}
      <FootHead />
      <Footer />
    </section>
  )
}

export default Home


