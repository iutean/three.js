import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'


useGLTF.preload('/macbook.glb')


const Model = (props) => {
    const { nodes, materials } = useGLTF('/models/macbook.glb')
    return (
        <group {...props} dispose={null}>
            <hemisphereLight
                position={[0, 0.1, 0]}
                intensity={1}
                color="#3b82f6"
                distance={100}
                decay={100}
            />
            {/* <pointLight
                position={[-0.3, -0.05, 0.15]}
                intensity={4000}
                color="#ffffff"
                distance={2}
                decay={0}
            /> */}
            {/* <pointLight
                position={[0.3, -0.05, 0.15]}
                intensity={4000}
                color="#ffffff"
                distance={2}
                decay={0}
            /> */}
            <mesh
                castShadow
                receiveShadow
                geometry={nodes['macbookpro-material'].geometry}
                material={materials.macbookpro}
                material-emissive="#3b82f6"
                material-emissiveIntensity={30}
                material-metalness={0.75}
                material-roughness={0.5}
                rotation={[-Math.PI / 2, 0, 0]}
            />
        </group>
    )
}

export default Model;

