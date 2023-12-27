import React, { useRef, useState } from 'react'
import "./Form.scss"
import emailjs from '@emailjs/browser';


const Form = () => {
  const ref = useRef()
  const form = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_mlo88fq', 'template_znpg0c3', form.current, 'ssDKjkCYBKRvCMHAJ')
      .then(
        (result) => {
          setSuccess(true);
      }, (error) => {
          setError(true);
      });
  };

  return (
    <div className='form'>
      <form
          ref={form} 
          onSubmit={sendEmail}
          //initial={{opacity: 0}}
        >
            <input type='text' required placeholder='Your Name' name="user_name" />
            <input type='email' required placeholder='Your Email' name="user_email" />
            <textarea rows={8} placeholder='Brief us about the project'  name="message" />
            
            <button type="submit" value="Send">
              Send Message
            </button>
            {error && "Error"}
            {success && "Success"}
        </form>
    </div>
  )
}

export default Form
