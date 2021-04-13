import React from 'react'
import SEO from "../components/seo"
import Model from "../components/grandedisco"
import {Canvas} from "@react-three/fiber"
import { Suspense } from 'react'
import { OrbitControls } from "@react-three/drei"

const IndexPage = () => {
  return (
  <>
    <SEO title="About" />
    <Canvas style={{height: 1000,}}>
      <ambientLight intensity={0.75} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
      <OrbitControls minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} enableZoom={true} enablePan={true} enableRotate={true}/>

    </Canvas>
  </>
  )
}
  
  export default IndexPage