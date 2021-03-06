import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import path from "../static/models/grandeDiscoDraco.gltf"

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF(path)
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_0.geometry}
        material={materials.Material_0}
        position={[0, 0.7, 0]}
        rotation={[-0.2, 0, 0]}
      />
    </group>
  )
}
useGLTF.preload('../static/models/grandeDiscoDraco.gltf')
