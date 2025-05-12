import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';

gsap.registerPlugin(useGSAP);
useGLTF.preload('/models/racks.glb')

const Model = (props) => {
    const ref = useRef();
    const { nodes, materials } = useGLTF('/models/racks.glb')

    useGSAP(() => {
        gsap.to(ref.current.rotation, {
            y: Math.PI / 24,  // Reduced from PI/6 to PI/12 for smaller rotation
            duration: 4,    // Reduced from 6 to 4.5
            ease: "power1.inOut",
            yoyo: true,
            repeat: -1,
            startAt: { y: -Math.PI / 24 }  // Adjusted to match new rotation
        });

        gsap.to(ref.current.position, {
            y: 0.03,  // Reduced from 0.07 to 0.05 for subtler float
            duration: 2.66666,
            ease: "power1.inOut",
            yoyo: true,
            repeat: -1,
        });
    });

    return (
        <group {...props} dispose={null}>
            <group ref={ref}>    
                <group position={[1.113, 0.424, -4.408]} rotation={[3.117, -0.865, 3.109]}>
                    <group position={[4, 0, -2]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_6.geometry}
                            material={materials['Plastic.Black.Smooth']}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_8.geometry}
                            material={materials['Metal.Chrome']}
                            position={[-0.053, 0.035, 0.148]}
                            rotation={[1.447, -0.284, 0.009]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_10.geometry}
                            material={materials['Metal.Chrome']}
                            position={[0.049, 0.008, 0.153]}
                            rotation={[1.573, 0, -0.086]}
                        />
                    </group>
                </group>
                <group position={[-1.524, -0.027, 7.944]} rotation={[0.038, 1.169, 0.014]}>
                    <group position={[8, 0, -2]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_14.geometry}
                            material={materials['Plastic.Black.Smooth']}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_16.geometry}
                            material={materials['Metal.Chrome']}
                            position={[-0.062, 0.015, 0.2]}
                            rotation={[1.585, 0.076, -0.218]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_18.geometry}
                            material={materials['Metal.Chrome']}
                            position={[0.058, 0.01, 0.237]}
                            rotation={[1.606, -0.001, -0.034]}
                        />
                    </group>
                </group>
                <group position={[-0.2, 0.1, -0.2]} rotation={[Math.PI / 2, 0, -Math.PI / 6]}>
                    <group position={[0, 0.048, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_21.geometry}
                            material={materials['Metal.Brushed']}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_22.geometry}
                            material={materials.FlightCase}
                        />
                        <group position={[0.5, 0.406, 0.1]} rotation={[-Math.PI / 2, 0.698, 0]}>
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_26.geometry}
                                material={materials['Metal.Brushed']}
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_27.geometry}
                                material={materials['Plastic.Black']}
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_28.geometry}
                                material={materials.FlightCase}
                            />
                        </group>
                        <group position={[-0.235, 0.402, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_30.geometry}
                                material={materials['Plastic.Black']}
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_31.geometry}
                                material={materials['Metal.Brushed']}
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_32.geometry}
                                material={materials.Rack}
                            />
                        </group>
                        <group position={[-0.235, 0.402, 0.045]} rotation={[-Math.PI / 2, 0, 0]}>
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_34.geometry}
                                material={materials['Plastic.Black']}
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_35.geometry}
                                material={materials.Rack}
                            />
                        </group>
                        <group position={[-0.235, 0.402, 0.09]} rotation={[-Math.PI / 2, 0, 0]}>
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_37.geometry}
                                material={materials['Plastic.Black']}
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_38.geometry}
                                material={materials['Metal.Brushed']}
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_39.geometry}
                                material={materials.Rack}
                            />
                        </group>
                        <group position={[-0.235, 0.402, -0.045]} rotation={[-Math.PI / 2, 0, 0]}>
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_41.geometry}
                                material={materials['Plastic.Black']}
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_42.geometry}
                                material={materials.Rack}
                            />
                        </group>
                        <group position={[0.235, 0.002, -0.045]} rotation={[Math.PI / 2, 0, -Math.PI]}>
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_44.geometry}
                                material={materials['Plastic.Black']}
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_45.geometry}
                                material={materials.Rack}
                            />
                        </group>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_24.geometry}
                            material={materials.FlightCase}
                        />
                    </group>
                </group>
                <group position={[-0.1, 0.204, -0.3]} rotation={[-Math.PI, 0.175, -Math.PI]}>
                    <group position={[0, 0.098, -0.406]} rotation={[Math.PI / 2, 0, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_48.geometry}
                            material={materials['Metal.Brushed']}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_49.geometry}
                            material={materials.FlightCase}
                        />
                        <group position={[0, 0.406, 0]}>
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_53.geometry}
                                material={materials['Metal.Brushed']}
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_54.geometry}
                                material={materials['Plastic.Black']}
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_55.geometry}
                                material={materials.FlightCase}
                            />
                        </group>
                        <group position={[-0.235, 0.402, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_57.geometry}
                                material={materials['Plastic.Black']}
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_58.geometry}
                                material={materials['Metal.Brushed']}
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_59.geometry}
                                material={materials.Rack}
                            />
                        </group>
                        <group position={[-0.235, 0.402, 0.045]} rotation={[-Math.PI / 2, 0, 0]}>
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_61.geometry}
                                material={materials['Plastic.Black']}
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_62.geometry}
                                material={materials.Rack}
                            />
                        </group>
                        <group position={[-0.235, 0.402, 0.09]} rotation={[-Math.PI / 2, 0, 0]}>
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_64.geometry}
                                material={materials['Plastic.Black']}
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_65.geometry}
                                material={materials['Metal.Brushed']}
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_66.geometry}
                                material={materials.Rack}
                            />
                        </group>
                        <group position={[-0.235, 0.402, -0.045]} rotation={[-Math.PI / 2, 0, 0]}>
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_68.geometry}
                                material={materials['Plastic.Black']}
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_69.geometry}
                                material={materials.Rack}
                            />
                        </group>
                        <group position={[0.235, 0.002, -0.045]} rotation={[Math.PI / 2, 0, Math.PI]}>
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_71.geometry}
                                material={materials['Plastic.Black']}
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_72.geometry}
                                material={materials.Rack}
                            />
                        </group>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_51.geometry}
                            material={materials.FlightCase}
                            position={[0.361, 0.241, 0.09]}
                            rotation={[Math.PI / 2, 0, Math.PI / 3]}
                        />
                    </group>
                </group>
            </group>
        </group>
    )
}

export default Model;
