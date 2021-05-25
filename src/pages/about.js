import React from "react"
import SEO from "../components/seo"
import { motion } from 'framer-motion'
import AprilImg from "../images/IMG_0220.jpeg"

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
          <img className="w-40" src={AprilImg} alt="me" />
          </motion.div>
          <motion.div 
          className="content"
          variants={item}
          transition="easeInOut"
        >
          <p className="w-52 px-4"> 
          Hello, I'm a recent grad (UChicago '20) and twentysomething. <br/><br/>
          This website is intended to be a personal site and collection of works.
          I hope for this namespace to become a sort of haven for myself, perhaps 
          eventually a <a className="underline hover:text-indigo-400" 
          href="https://tomcritchlow.com/blogchains/digital-gardens/">digital garden</a>. <br/><br/>
          If you've found me here, I'd love to chat -- send me chain letters at aprilwang@uchicago.edu;
          I'm always in search of new friends & chance encounters!
        
          </p>
        </motion.div>
        </div>

      </motion.section>
    </>
  )
}

export default AboutPage