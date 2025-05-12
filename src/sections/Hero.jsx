import { Leva } from 'leva';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { PerspectiveCamera } from '@react-three/drei';


import VinylPlayer from '../components/Vinyl.jsx';
import Mac from '../components/Mac.jsx';
import Headsets from '../components/Headsets.jsx';
import Button from '../components/Button.jsx';
import CanvasLoader from '../components/CanvasLoader.jsx';
import HeroCamera from '../components/HeroCamera.jsx';
import { calculateSizes } from '../constants/index.js';

import Speakers from '../components/Speakers.jsx';
import Racks from '../components/Racks.jsx';

const Hero = () => {
  // Use media queries to determine screen size
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          Nitsane&apos;<span className="waving-hand">s</span>
        </p>
        <p className="hero_tag text-gray_gradient">TrackDen</p>
      </div>

      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <Leva hidden />
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />

            <HeroCamera isMobile={isMobile}>
              <Mac scale={20} position={sizes.deskPosition} rotation={[0, 0, 0]} />
            </HeroCamera>

            <group>
              <Speakers scale={6.5} position={sizes.speakersPosition}/>
              <Headsets scale={15} position={sizes.headsetPosition} />
              <VinylPlayer scale={15} position={sizes.vinylPosition}/>
              <Racks scale={6.45} position={sizes.racksPosition}/>
            </group>

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#about" className="w-fit">
          <Button name="See more" isBeam containerClass="sm:w-fit w-full sm:min-w-96 bg-black-400/50 backdrop-blur-lg rounded-3xl" />
        </a>
      </div>
    </section>
  );
};

export default Hero;