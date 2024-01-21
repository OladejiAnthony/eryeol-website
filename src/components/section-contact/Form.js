/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef, useState } from 'react'
import "./Form.scss"
import emailjs from '@emailjs/browser';


const Form = () => {
  //const ref = useRef()
  const form = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_hgl8l2q', 'template_mdj47mq', form.current, 'ssDKjkCYBKRvCMHAJ')
      .then((result) => {
          setSuccess(true);
          console.log('SUCCESS!', result.status, result.text);
      }, (error) => {
          setError(true);
          console.log(error);
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
            
            <div>
              <a target="_blank" type="submit" value="Send">
                Send Message
              </a>
              {error && "Error"}
              {success && "Success"}
              
                <a href="" target="_blank" className='btn-feed' onClick={()=> console.log("whatsapp contact")}>
                Instant Feedback
                </a>
              
            </div>
            
        </form>
    </div>
  )
}

export default Form


