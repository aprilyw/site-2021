import React from "react"
import SEO from "../components/seo"
import { Link } from "gatsby"

const SculpturePage = () => (
  <>
    <SEO title="Sculpture" />
    <div className= "container">
    <Link className="mx-2 underline hover:text-indigo-400" to="/grandeDisco/"> The Grande Disco</Link>
    </div>
  </>
)

export default SculpturePage

