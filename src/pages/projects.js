import React from "react"
import SEO from "../components/seo"
import { GoLinkExternal } from 'react-icons/go';
import { Link } from "gatsby"


const ProjectsPage = () => (
  <>
    <SEO title="Projects" />
    <div className= "container grid-cols-1">
    <div>
        <a className="mx-2 underline hover:text-indigo-400" href="https://www.chicagoaww.com"> Chicago Asian Writers Workshop<GoLinkExternal className="inline-block opacity-25 -mt-3px" /></a>
    </div>
    <div>
        <Link className="mx-2 underline hover:text-indigo-400" to="/coursework/"> Coursework</Link>
    </div>
    </div>
  </>
)

export default ProjectsPage
