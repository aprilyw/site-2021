import React from 'react'
import SEO from "../components/seo"
import Model from "../components/grandedisco"
import {Canvas} from "@react-three/fiber"
import { Suspense } from 'react'
import { OrbitControls, Html } from "@react-three/drei"

const IndexPage = () => {
  return (
  <>
    <SEO title="About" />
    <Canvas style={{height: 1000,}}>
      <ambientLight intensity={1} />
      <Suspense fallback={<Html>Loading the Grande Disco...</Html>}>
        <Model />
      </Suspense>
      <OrbitControls minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} enableZoom={true} enablePan={true} autoRotate={true}/>

    </Canvas>
  </>
  )
}
  
  export default IndexPage