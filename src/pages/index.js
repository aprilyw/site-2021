import React from 'react'
import SEO from "../components/seo"
import Model from "../components/grandedisco"
import {Canvas} from "@react-three/fiber"
import { Suspense } from 'react'
import { OrbitControls, Html, useProgress } from "@react-three/drei"

function Loader() {
  const { progress } = useProgress()
  return <Html center color="black">{progress} % loaded</Html>
}

const IndexPage = () => {
  return (
  <>
    <SEO title="Index" />
    <div className= "">

    <Canvas style={{height: 700,}}>
      <ambientLight intensity={2} />
      <Suspense fallback={<Loader />}>
      <Model />
      </Suspense>
      <OrbitControls minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} enableZoom={true} enablePan={true} autoRotate={true}/>
    </Canvas>


    <p className="absolute bottom-0 right-0">
        <strong> <i> The Grande Disco</i></strong>, 1968 <br/> 
        Arnaldo Pomodoro <br/>
        University of Chicago
        
    </p>
    </div>
  </>
  )
}
  
  export default IndexPage



  