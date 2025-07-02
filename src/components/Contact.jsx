import React from 'react'
import { motion } from 'framer-motion'
import ContactMe from './ContactMe'
import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-20'>
      <motion.h1
      whileInView={{opacity:1, y:0}}
      initial={{opacity:0, y:-100}}
      transition={{duration:0.5}}
      className='my-10 text-center lg:text-3xl text-xl'>Get in Touch</motion.h1>
      <div className='text-center tracking-tighter '>
        <motion.div
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:-100}}
        transition={{duration:1}}
        className='my-4'><ContactForm/></motion.div>
        <motion.div 
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:100}}
        transition={{duration:1}}
        className='my-4'><ContactMe/></motion.div>
      </div>
    </div>
  )
}

export default Contact
