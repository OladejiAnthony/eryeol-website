/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import "../footer/WFooterHead.scss"
import {motion, useAnimation} from "framer-motion"
import { Link } from 'react-router-dom';


const WFooterHead = () => {
  const variant = {
    visible: { scale: 1, transition: {duration: 2} },
    hidden: { scale: 0 },
  };

  return (
    <div className='white-foot-head'>
        <motion.div 
          
          className='white-wrapper'
        >
          <motion.div 
            variants={variant}
            initial="hidden"
            whileInView="visible"
            className='white-top'
          >
            <p>Let’s plunge you into your world of possibilities</p>
          </motion.div>

          <div className='white-bottom'
          >
             <p className='boxItem'>
              Ready for a Digital Revolution ?
            </p>
            <Link to="/contact" className='boxItem'>
              Get in Touch
            </Link>
          </div>
        </motion.div>
    </div>
  )
}

export default WFooterHead
