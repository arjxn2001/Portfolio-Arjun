import { useEffect, useState } from "react"
import { CERTIFICATION } from "../contants"
import pic1 from "../assets/certificate1.jpg"
import pic2 from "../assets/certificate2.jpg"
import { AnimatePresence, motion } from "framer-motion"

const Certification = () => {
  const [showFirstImage, setShowFirstImage] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirstImage(prev => !prev);
    }, 4000); // every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="border-b border-neutral-900 pb-4"> 
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-16 text-center text-4xl"
      >
        Certification
      </motion.h1>

      <div className="mb-8 lg:justify-center">
        <motion.h1
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="text-center text-neutral-300 text-xl mb-10"
        >
          {CERTIFICATION.course}
          <span className="ms-2 text-neutral-500" style={{ fontSize: "15px" }}>
            ({CERTIFICATION.duration})
          </span>
        </motion.h1>

      <div className="relative flex items-center justify-center mt-10 w-full h-[540px]">
  <AnimatePresence mode="wait">
    <motion.a
      key={showFirstImage ? "img1" : "img2"}
      href={showFirstImage ? pic1 : pic2}
      target="_blank"
      rel="noopener noreferrer"
      className="absolute"
    >
      <motion.img
        src={showFirstImage ? pic1 : pic2}
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 200, opacity: 0 }}
        transition={{ duration: 1 }}
        className="w-[400px] h-[540px] border-2 border-neutral-400 object-cover rounded-xl"
      />
    </motion.a>
  </AnimatePresence>
</div>


      </div>
    </div>
  );
};

export default Certification;
