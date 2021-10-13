import React from 'react'
import SEO from "../components/seo"
import { Link } from "gatsby"

const ThoughtsPage = () => {
  return (
  <>
    <SEO title="Design" />
    <div className="container">
    <div>
        <Link className="mx-2 underline hover:text-indigo-400" to="/drawings/"> Drawings</Link>
    </div>
    </div>
  </>

  )
}
  
  export default ThoughtsPage