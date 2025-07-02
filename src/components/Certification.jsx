import { useEffect, useState } from "react"
import { CERTIFICATION } from "../contants"
import pic1 from "../assets/certificate1.jpg"
import pic2 from "../assets/certificate2.jpg"
import figma from "../assets/Figma.jpg" // ➕ Add this image for Udemy
import { AnimatePresence, motion } from "framer-motion"

const Certification = () => {
  const [showFirstImage, setShowFirstImage] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirstImage(prev => !prev);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center lg:text-3xl text-xl"
      >
        Certification
      </motion.h1>

      {CERTIFICATION.map((item, index) => (
        <div className="mb-20 lg:justify-center" key={index}>
          <motion.h1
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="text-center text-neutral-300 lg:text-xl mb-10"
          >
            {item.course}
            <div className="ms-2 text-neutral-500" style={{ fontSize: "15px" }}>
              ({item.duration})
            </div>
          </motion.h1>

          <div className="relative flex items-center justify-center mt-10 w-full lg:h-[360px] h-[200px]">
            {index === 0 ? (
              // MERN: Swapping Images
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
                    className="lg:h-[390px] h-[250px] border-2 border-neutral-400 object-cover rounded-xl"
                  />
                </motion.a>
              </AnimatePresence>
            ) : (
              // Udemy: Static Image
              <motion.a
                href={figma}
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.img
                  src={figma}
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="lg:h-[300px] h-[150px]  border-2 border-neutral-400 object-cover rounded-xl"
                />
              </motion.a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Certification;
