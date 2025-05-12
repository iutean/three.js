import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

gsap.registerPlugin(useGSAP);

useGLTF.preload('/models/vinyl.glb')

const Vinyl = (props) => {
    const { nodes, materials } = useGLTF('/models/vinyl.glb')
    const ref = useRef();
    useGSAP(() => {
        gsap.to(ref.current.rotation, {
            z: Math.PI * 2,
            duration: 8,
            ease: "none",
            repeat: -1,
        });

        gsap.to(ref.current.position, {
            y: 0.025,
            duration: 2,
            ease: "power1.inOut",
            yoyo: true,
            repeat: -1,
        });
    });

    return (
        <group {...props} dispose={null}>
            <group ref={ref} rotation={[-Math.PI / 2, 0, 0]}>
                <pointLight
                    position={[0, 2, 0]}  // Positioned above the Mac
                    intensity={1}
                    color="#ffffff"
                    distance={5}
                    decay={2}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['#REC0002_33_Highway_To_Hell_#REC0002_Textures_0'].geometry}
                    material={materials.REC0002_Textures}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <meshStandardMaterial
                    metalness={0.5}
                    roughness={0.2}  // Reduced roughness for better light reflection
                    emisive="#ffffff"
                    emissiveIntensity={10}
                />
            </group>
        </group>
    )
}

export default Vinyl;