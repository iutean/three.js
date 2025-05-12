
import React, { useState, useEffect, useMemo } from 'react';
import { createRoot } from 'react-dom';
import Button from '../components/Button';
// Fix the Globe import
import Globe from 'react-globe.gl';

const About = () => {

    const [hasCopied, setHasCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(' adrian@jsmastery.pro');
        setHasCopied(true);

        setTimeout(() => {
            setHasCopied(false);
        }, 2000);
    };

    const [rise, setRise] = useState(false);

    useEffect(() => {
        setTimeout(() => setRise(true), 6000);
    }, []);

    // Gen random paths
    const N_PATHS = 10;
    const MAX_POINTS_PER_LINE = 10000;
    const MAX_STEP_DEG = 1;
    const MAX_STEP_ALT = 0.001;
    const gData = useMemo(() => [...Array(N_PATHS).keys()].map(() => {
        let lat = (Math.random() - 0.5) * 90;
        let lng = (Math.random() - 0.5) * 360;
        let alt = 0;

        return [[lat, lng, alt], ...[...Array(Math.round(Math.random() * MAX_POINTS_PER_LINE)).keys()].map(() => {
            lat += (Math.random() * 2 - 1) * MAX_STEP_DEG;
            lng += (Math.random() * 2 - 1) * MAX_STEP_DEG;
            alt += (Math.random() * 2 - 1) * MAX_STEP_ALT;
            alt = Math.max(0, alt);

            return [lat, lng, alt];
        })];
    }),
        []
    );

    return (
        <section className="c-space my-20" id='about'>
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

                        <div>
                            <p className="grid-headtext">Hi, I’m Nitsane</p>
                            <p className="grid-subtext">
                            I've been producing music for over 4 years, primarily using FL Studio. What started as a personal creative outlet has grown into collaborations with a few artists, allowing me to refine my sound and expand my experience across different styles.                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="assets/fruitloops.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

                        <div>
                            <p className="grid-headtext">Producing</p>
                            <p className="grid-subtext">
                            I started out producing genres like wave music and pluggnb. Over time, my curiosity led me to explore a wide range of sounds—now I&apos;m experimenting with everything from ambient textures to harder trap and electronic influences.
                            
                            </p>
                        </div>
                    </div>
                </div>

                <div className='col-span-1 xl:row-span-4'>
                    <div className='grid-container'>
                        <div className='rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center'>
                            <Globe
                                height={326}
                                width={326}
                                globeImageUrl="//cdn.jsdelivr.net/npm/three-globe/example/img/earth-blue-marble.jpg"
                                bumpImageUrl="//cdn.jsdelivr.net/npm/three-globe/example/img/earth-topology.png"
                                pathsData={gData}
                                pathColor={() => ['rgba(0,0,255,0.6)', 'rgba(255,0,0,0.6)']}
                                pathDashLength={0.01}
                                pathDashGap={0.004}
                                pathDashAnimateTime={100000}
                                pathPointAlt={rise ? pnt => pnt[2] : undefined}
                                pathTransitionDuration={rise ? 4000 : undefined}
                                showAtmosphere
                            />
                        </div>
                        <div>
                            <p className="grid-headtext">I’m very flexible with time zone communications & locations</p>
                            <p className="grid-subtext">I'm based in Romania but I'm able to work with other producers worldwide for possible collaborations.</p>
                            <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
                        </div>


                    </div>
                </div>

                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

                        <div>
                            <p className="grid-headtext">My work</p>
                            <p className="grid-subtext">
                            If you’re curious about what I’ve been working on, I’ve put together a few samples below. These tracks showcase a mix of styles I’ve explored over the years—from my early wave and pluggNB influences to the more experimental and genre-blending sounds I’m creating now. Whether it’s a mellow vibe or something more hard-hitting, each piece reflects my growth and approach as a producer. Feel free to take a listen and get a sense of what I’m all about.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <img
                            src="assets/grid4.png"
                            alt="grid-4"
                            className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
                        />

                        <div className="space-y-2">
                            <p className="grid-subtext text-center">Contact me</p>
                            <div className="copy-container" onClick={handleCopy}>
                                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">nitsaneloops@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About