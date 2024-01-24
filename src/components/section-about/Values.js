import React from 'react'
import "./Values.scss"

const Values = () => {
  return (
    <div className='values'>
      <div className='wrapper'>
        <div>
            <button>Our Values</button>
            <h3>More then Tech: Our Commitment to Excellence.</h3>
        </div>
        <div className='list'>
            <div className='item'>
                <h5>Innovation and Excellence</h5>
                <p>Continuously pushing the boundaries of technology to create products that redefine the market and set new standards for functionality, user experience, and design.</p>
            </div>
            <div className='item'>
                <h5>Integrity and Transparency </h5>
                <p>Upholding the highest standards of integrity in all of our operations. We are transparent in our practices, ensuring that we earn and maintain the trust of our customers and partners.</p>
            </div>
            <div className='item'>
                <h5>User-Centric Design</h5>
                <p>Placing the user at the center of everything we do. We design products and services that are intuitive, accessible, and tailored to meet the diverse needs of our global user base.</p>
            </div>
            <div className='item'>
                <h5>Sustainable Practices</h5>
                <p>Committed to sustainability in our operations and product development. We innovate to reduce environmental impact and promote a healthier planet.</p>
            </div>   
        </div>
        <div className='list mobile-hide'>
            <div className='item'>
                <h5>Inclusive Culture and Diversity</h5>
                <p>Fostering an inclusive workplace culture that embraces and celebrates diversity. We encourage different perspectives and ideas to drive creativity and innovation.</p>
            </div>
            <div className='item'>
                <h5>Learning and Development</h5>
                <p>Investing in the continuous learning and development of our employees. We encourage a culture of curiosity and lifelong learning to keep our team at the forefront of technological advancements.</p>
            </div>
            <div className='item'>
                <h5>Community Engagement and Social Responsibility</h5>
                <p>Actively engaged with and give back to our communities. We use our technology for social good, aiming to make a positive impact on society.</p>
            </div>
            <div className='item'>
                <h5>Adaptability and Agility</h5>
                <p>Remain adaptable and agile, quickly responding to market changes and emerging trends to stay ahead in the technology sector.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Values


