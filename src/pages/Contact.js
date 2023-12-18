import React from 'react'
import "./Contact.scss"
import WhiteNavbar from '../components/navbar/WhiteNavbar'
import ContactHero from '../components/section-contact/ContactHero'
import Form from '../components/section-contact/Form'
import WhiteFooter from '../components/footer/WhiteFooter'

function Contact() {
  return (
    <div className='contact-page'>
      <WhiteNavbar />
      <ContactHero />
      <Form />
      <WhiteFooter />
    </div>
  )
}

export default Contact
