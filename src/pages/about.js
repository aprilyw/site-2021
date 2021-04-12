import React from "react"
import SEO from "../components/seo"
import { motion } from 'framer-motion'

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
        <motion.div 
          className="content"
          variants={item}
          transition="easeInOut"
        >
          <p className="text-lg md:text-xl pl-3">Hello from the about page</p>
        </motion.div>

        <motion.div 
          className="content"
          variants={item}
          transition="easeInOut"
        >
          <hr className="block my-8" />
        </motion.div>

        <motion.div 
          className="content"
          variants={item}
          transition="easeInOut"
        >
          <p> 
              Here you'll find some thoughts, if you're interested -- I'm just another rando on the internet. Feel free to reach out to me at aprilwang@uchicago.edu.
          </p>
        </motion.div>
      </motion.section>
    </>
  )
}

export default AboutPage