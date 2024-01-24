/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef, useState } from 'react'
import "./Form.scss"
import emailjs from '@emailjs/browser';


const Form = () => {
  //const ref = useRef()
  const form = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setMessage("");
    console.log(name, email, message);
    
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
            <input type='text' required placeholder='Your Name' name="user_name" value={name} onChange={(e)=> setName(e.target.value)} />
            <input type='email' required placeholder='Your Email' name="user_email" value={email} onChange={(e)=> setEmail(e.target.value)} />
            <textarea rows={8} placeholder='Brief us about the project'  name="message" value={message} onChange={(e)=> setMessage(e.target.value)}  />
            
            <div>
              <button target="_blank" type="submit" value="Send">
                Send Message
              </button>
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


