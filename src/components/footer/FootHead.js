/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import bg from "../../image/world.png"
import "../footer/FootHead.scss"
import {motion, useAnimation} from "framer-motion"

const FootHead = () => {
  const text = "Let’s plunge you into your world of possibilities".split(" ");

  const variant = {
    visible: { scale: 1, transition: {duration: 2}},
    hidden: { scale: 0 },
  };

  //Parent Animation
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
          <motion.div 
            className='bottom'
            variants={boxVariant}
            initial="hidden"
            animate="visible"
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
        </div>
    </div>
  )
}

export default FootHead
