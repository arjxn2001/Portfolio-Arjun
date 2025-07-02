import { EXPERIENCE } from '../contants'
import { motion } from 'framer-motion'


const Experience = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h1
      whileInView={{opacity:1, y:0}}
      initial={{opacity:0, y:-100}}
      transition={{duration:0.5}}
      className='my-20 text-center lg:text-3xl text-xl'>Experience</motion.h1>
      <div>{EXPERIENCE.map((experience, index)=>(
        <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
          <motion.p
          whileInView={{opacity:1, x:0}}
          initial={{opacity:0, x:-100}}
          transition={{duration:1}}
          className='w-full lg:w-1/4 text-neutral-400 mb-3'>
          {experience.year}
          </motion.p>
          <motion.div 
          whileInView={{opacity:1, x:0}}
          initial={{opacity:0, x:100}}
          transition={{duration:1}}
          className='w-fill max-w-xl lg:w-3/4 '>
          <h6 className='mb-2 font-semibold'>{experience.role} - {experience.company}</h6>
          <p className='mb-4 text-neutral-400'>{experience.description}</p>
          
          </motion.div>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Experience
