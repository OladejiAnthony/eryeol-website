import React, { useState } from 'react'
import { motion } from 'framer-motion'
import "../sidebar/Sidebar.scss"
import Links from './links/Links';
import ToggleBtn from './menu/ToggleBtn';

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  //Framer motion variant animation
  const variants = {
      open : {
          transition: {
              type: "spring",
              stiffness: 20,
          },
          backgroundColor : "#ffffff",
          borderRadius: "40px",
          position: "absolute",
          top: "145px",
          right: "85px",
          width: "447px",
          height: "544px",
          //clipPath: "circle(1200px at 50px 50px)",
      },
      closed : {
          clipPath: "inset(60px 30px 535px 310px round 20px)",
          transition: {
              delay: 0.2,
              type: "spring",
              stiffness: 400,
              damping: 40
          }, 
          //clipPath: "circle(30px at 50px 50px)",
      }
  }

  return (
    <motion.div 
        className='sidebar'
        animate={open ? "open" : "closed"}
    >
      <motion.div 
        className='bg'
        variants={variants}
      >
       <Links />
      </motion.div>
      <ToggleBtn setOpen={setOpen}/>
    </motion.div>
  )
}

export default Sidebar

//48mins
