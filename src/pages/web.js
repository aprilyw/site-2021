import React from 'react'
import SEO from "../components/seo"
import { GoLinkExternal } from 'react-icons/go';

const WebPage = () => {
  return (
  <>
    <SEO title="Design" />
    <div className="container">
    <div>
        <a className="mx-2 underline hover:text-indigo-400" href="https://www.chicagoaww.com"> Chicago Asian Writers Workshop<GoLinkExternal className="inline-block opacity-25 -mt-3px" /></a>
        <a className="mx-2 underline hover:text-indigo-400" href="https://www.threedle.cs.uchicago.edu">Threedle (3DL) Lab<GoLinkExternal className="inline-block opacity-25 -mt-3px" /></a>
    </div>
    </div>
  </>

  )
}
  
  export default WebPage