import React from "react"
import SEO from "../components/seo"
import { motion } from 'framer-motion'
import { GoLinkExternal } from 'react-icons/go';

const duration = 0.35

const container = {
  visible: {
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.2,
      delayChildren: duration,
    },
  },
}
const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

const AboutPage = () => {
  return (
    <>
      <SEO title="About" />
      <motion.section
        variants={container}
        initial="hidden" 
        animate="visible"
        className="container"
      >
          <div className="container mx-auto grid grid-flow-col px-4">

        <motion.div 
          className="content"
          variants={item}
          transition="easeInOut"
        >
          <p className="w-52 px-4"> 
          This website is intended to be a personal site and collection of works.
          </p>

          <p className="w-52 px-4"> 
          It's definitely a WIP, but so are a lot of things in life.
          </p>

          <p className="w-52 px-4"> 
          Seeking roles in Full Stack or Frontend development, potentially with a focus in AI/ML or 3D graphics.
          </p>
          <a target="_blank" rel="noreferrer noopener" className="hover:text-indigo-600 navigation-wrapper__link w-52 px-4" href="https://github.com/aprilyw">
            Github <GoLinkExternal className="inline-block opacity-25 -mt-3px" /></a>
        </motion.div>
        </div>

      </motion.section>
    </>
  )
}

export default AboutPage