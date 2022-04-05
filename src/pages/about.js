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
          I hope for this namespace to become a sort of haven for myself, perhaps 
          eventually a <a className="underline hover:text-indigo-400" 
          href="https://www.technologyreview.com/2020/09/03/1007716/digital-gardens-let-you-cultivate-your-own-little-bit-of-the-internet/">digital garden</a>.
          <br/><br/>
          If you've found me here, I'd love to chat -- send me chain letters at aprilwang@uchicago.edu;
          I'm always in search of new friends & chance encounters!
        
          </p>

          <div>
          <a target="_blank" rel="noreferrer noopener" className="hover:text-indigo-600 navigation-wrapper__link" href="https://github.com/aprilyw">
            Github <GoLinkExternal className="inline-block opacity-25 -mt-3px" /></a>
            </div>
        </motion.div>
        </div>

      </motion.section>
    </>
  )
}

export default AboutPage