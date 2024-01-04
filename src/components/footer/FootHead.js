/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import bg from "../../image/world.png"
import "../footer/FootHead.scss"
import {motion} from "framer-motion"

const FootHead = () => {
  const text = "Let’s plunge you into your world of possibilities".split(" ");

  return (
    <div className='foot-head'>
        <div className='wrapper'>
          <div className='foot-bg0img'>
            <img src={bg} alt='image'  />
          </div>
          <div className='top'>
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
          </div>
          <div className='bottom'>
             <p>Ready for a Digital Revolution ?</p>
             <h1>Get in Touch</h1>
          </div>
        </div>
    </div>
  )
}

export default FootHead
