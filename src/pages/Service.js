import React from 'react'
import "./Service.scss"
import ServiceHero from '../components/section-service/ServiceHero'
import ServiceList from '../components/section-service/ServiceList'
import WhiteNavbar from '../components/navbar/WhiteNavbar'
import WhiteFooter from '../components/footer/WhiteFooter'
import WFooterHead from '../components/footer/WFooterHead'

function Service() {
  
  return (
    <section className='service-page'>
      <div className='bg-img'>
        <WhiteNavbar />
        <ServiceHero />
      </div>
      <ServiceList />
      <WFooterHead />
      <WhiteFooter />
    </section>
  )
}

export default Service


