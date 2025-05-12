
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const  Shelf = (props) => {
  const { nodes, materials } = useGLTF('/models/shelf.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group scale={[19.255, 29.051, 19.255]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4.geometry}
            material={materials.TexturesCom_AudioEquipment0039_1_XL}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_5.geometry}
            material={materials.metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6.geometry}
            material={materials.toor}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/shelf.glb')

export default Shelf