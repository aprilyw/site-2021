import React from 'react'
import SEO from "../components/seo"
import one from "../images/drawings/001.jpeg"
import two from "../images/drawings/003.jpeg"
import three from "../images/drawings/004.jpeg"


const DrawingsPage = () => {
  return (
  <>
    <SEO title="Drawings" />
    <div className="container">
    <div className="text-gray-300"> under construction .. </div>
    </div>

    <div class="flex flex-wrap overflow-hidden lg:-mx-6 lg:px-24">

    <div class="w-full overflow-hidden lg:my-6 lg:px-6 lg:w-1/3">
    <img src={three} alt="me" />
    </div>

    <div class="w-full overflow-hidden lg:my-6 lg:px-6 lg:w-1/3">
    <img src={two} alt="me" />
    </div>

    <div class="w-full overflow-hidden lg:my-6 lg:px-6 lg:w-1/3">
    <img class="" src={one} alt="me" />
    </div>

    </div>
  </>

  )
}
  
  export default DrawingsPage