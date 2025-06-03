import React, { useState } from 'react';
import { PROJECTS } from '../contants';
import { motion } from 'framer-motion';

const Projects = () => {
  const [visibleCount, setVisibleCount] = useState(2); // Show 2 projects at first

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 2); // Show next 2 on each click
  };

  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>

      <div>
        {PROJECTS.slice(0, visibleCount).map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <img
                src={project.image}
                alt={project.title}
                width={150}
                height={150}
                className="mb-6 rounded"
              />
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-fill max-w-xl lg:w-3/4"
            >
              <div className='flex gap-10'>
                <h6 className="mb-2 font-semibold ">{project.title}</h6>
                <span className='text-sm text-cyan-500 mt-0.5 underline'>{project.github}</span>
                <span  className='text-sm text-cyan-500 mt-0.5 underline'>{project.live}</span>
              </div>
             
              
              <p className="mb-4 text-neutral-400">{project.description}</p>
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}

        {/* Show More Button */}
        {visibleCount < PROJECTS.length && (
          <div className="text-center">
            <button
              onClick={handleShowMore}
              className="rounded bg-purple-900 px-4 py-2 text-white hover:bg-purple-800"
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
