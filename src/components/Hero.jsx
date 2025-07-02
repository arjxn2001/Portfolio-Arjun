import { HERO_CONTENT } from "../contants/index.jsx"
import profilePic from "../assets/mee.jpg"
import { motion } from "framer-motion"

const container = (delay) => ({
  hidden: {x: -100, opacity: 0},
  visible: {
    x: 0,
    opacity: 1,
    transition: {duration: 0.5, delay: delay },
  }
})

const Hero = () => {
  return (
    <div className="border-b border-neutral-600 pb-4 lg:mb-55">
      <div className="flex flex-wrap pt-3">
        <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start lg:ml-12">
                <motion.h1 
                variants={container(0)}
                initial="hidden"
                animate="visible"
                className="lg:pb-7 pb-5 text-5xl font-thin tracking-tight lg:mt-16 lg:text-6xl">
                    Arjun KB
                </motion.h1>
                <motion.span
                variants={container(0.5)}
                initial="hidden"
                animate="visible"
                 className="bg-gradient-to-r from-purple-600 via-slate-400 to-pink-300 text-transparent bg-clip-text lg:text-3xl text-xl tracking-tight font-light">
                    React Front End Developer
                </motion.span>
                <motion.p
                variants={container(1)}
                initial="hidden"
                animate="visible"
                className="my-1 max-w-xl py-6 font-light text-neutral-300 text-xs lg:text-sm text-justify">
                  {HERO_CONTENT}
                </motion.p>

                <motion.a
                variants={container(1.5)}
                initial="hidden"
                animate="visible"
                href="/resume_arjun_kb.pdf" 
                download="Arjun_Resume.pdf"
                    className="bg-gradient-to-r from-cyan-800 via-cyan-600 to-cyan-800  hover:text-gray-900 text-white lg:text-md  text-xs font-semibold py-2 px-4 rounded-xl transition-all duration-300 mb-10">
                      Download Resume
                </motion.a>
            </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8 ">
          <div className="flex justify-center ">
            <motion.img 
            initial={{x:100, opacity:0}}
            animate={{x:0, opacity:1}}
            transition={{duration:1 , delay:0.6}}
            className="lg:w-95  border sm:w-100  border-neutral-500  shadow-lg shadow-neutral-600  rounded-2xl lg:ml-8 " src={profilePic} alt="Arjun KB" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
