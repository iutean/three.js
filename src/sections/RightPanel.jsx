import React, { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Shelf from '../components/Shelf';
import { useFrame } from '@react-three/fiber';

const ShelfWithControls = () => {
  const groupRef = useRef();

  useFrame((state) => {
    // Continuous gentle floating and rotation animation
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.03;
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.02;
    }
  });

  return (
    <group ref={groupRef}>
      <Shelf scale={0.9} position={[0, 0, 0]} rotation={[0, 0, 0]} />
    </group>
  );
};

const RightPanel = () => {
  return (
    <div className="w-full h-[800px] absolute inset-0" id='work'>
      <Canvas 
        className="w-full h-full"
        camera={{ 
          position: [0, 0, 10],
          fov: 100
        }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={1.5} />
          <directionalLight position={[10, 10, 10]} intensity={0.8} />
          <ShelfWithControls />
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default RightPanel;