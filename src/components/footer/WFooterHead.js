/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import "../footer/WFooterHead.scss"
import {motion, useAnimation} from "framer-motion"


const WFooterHead = () => {
  const variant = {
    visible: { scale: 1, transition: {duration: 2} },
    hidden: { scale: 0 },
  };

  const boxVariant = {
    hidden: {
      x: "-100vw"
    },
    visible: {
      x: 0,
      transition: {
        delay: 2,
        when: "beforeChildren", //complete parent animation before the child begins its own animation.
        staggerChildren: 0.2,

        //Additions:
        //delayChildren: 1
        //staggerDirection: -1
      }
    }
  }
  //ChildList Animation
  const listVariant = {
    hidden: {
      x: -10,
      opacity: 0
    },
    visible: {
      x: 0,
      opacity: 1,

      //Additions
      transition: {
         repeat: Infinity,
         repeatType: "mirror",
         duration: 2,
      }
    }
  }
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

          <motion.div 
            variants={boxVariant}
            initial="hidden"
            animate="visible"
            className='white-bottom'
          >
             <motion.p
              className='boxItem'
              variants={listVariant}
             >
              Ready for a Digital Revolution ?
            </motion.p>
            <motion.h1
              className='boxItem'
              variants={listVariant}
            >
              Get in Touch
            </motion.h1>
          </motion.div>
        </motion.div>
    </div>
  )
}

export default WFooterHead
