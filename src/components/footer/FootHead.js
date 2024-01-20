/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import bg from "../../image/world.png"
import "../footer/FootHead.scss"
import {motion, useAnimation} from "framer-motion"
import { Link } from 'react-router-dom'

const FootHead = () => {
  const text = "Let’s plunge you into your world of possibilities".split(" ");

  const variant = {
    visible: { scale: 1, transition: {duration: 2}},
    hidden: { scale: 0 },
  };


  return (
    <div className='foot-head'>
        <div className='wrapper'>
          <div className='foot-bg0img'>
            <img src={bg} alt='image'  />
          </div>
          <motion.div 
            variants={variant}
            initial="hidden"
            whileInView="visible"
            className='top'
          >
            <p>
            {text.map((el, i) => (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.25,
                  delay: i / 10
                }}
                key={i}
              >
                {el}{" "}
              </motion.span>
            ))}
            </p>
          </motion.div>
          <div className='bottom'>
             <p className='boxItem'>
              Ready for a Digital Revolution ?
            </p>
            <Link to="/contact" className='boxItem'>
              Get in Touch
            </Link>
          </div>
        </div>
    </div>
  )
}

export default FootHead
