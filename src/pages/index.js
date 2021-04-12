import React from 'react'
import SEO from "../components/seo"
import { motion } from 'framer-motion'
import Model from "../components/grandeDisco"
import {Canvas} from "@react-three/fiber"
import Layout from "../components/layout"
import { Suspense } from 'react'


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

// function Box(props) {
//   // This reference will give us direct access to the mesh
//   const mesh = useRef()
//   // Set up state for the hovered and active state
//   const [hovered, setHover] = useState(false)
//   const [active, setActive] = useState(false)
//   // Rotate mesh every frame, this is outside of React without overhead
//   useFrame(() => {
//     mesh.current.rotation.x = mesh.current.rotation.y += 0.01
//   })
//   return (
//     <mesh
//       {...props}
//       ref={mesh}
//       scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
//       onClick={(e) => setActive(!active)}
//       onPointerOver={(e) => setHover(true)}
//       onPointerOut={(e) => setHover(false)}>
//       <boxBufferGeometry args={[1, 1, 1]} />
//       <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
//     </mesh>
//   )
// }


const IndexPage = () => (

    <Canvas>
      <ambientLight intensity={0.2} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
    </Canvas>

  )
  
  export default IndexPage