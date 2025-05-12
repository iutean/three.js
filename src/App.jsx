import React from 'react'  
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import AudioPlayer from './sections/AudioPlayer'
import RightPanel from './sections/RightPanel'
import Footer from './sections/Footer'

import AudioFile1 from '/assets/audio1.mp3'
import AudioFile2 from '/assets/audio2.mp3'
import AudioFile3 from '/assets/audio3.mp3'

const App = () => {
  const audioFiles = [
    { name: 'Audio 1', file: AudioFile1 },
    { name: 'Audio 2', file: AudioFile2 },
    { name: 'Audio 3', file: AudioFile3 }
  ];

  return (
    <main className="max-w-7xl mx-auto relative">
      <div className="text-white">
        <Navbar />
        <Hero />
        <About />
        <div className="mt-20 relative h-[800px]">
          <RightPanel />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full max-w-[700px] flex justify-center" style={{ pointerEvents: 'none' }}>
              <div className="w-full" style={{ pointerEvents: 'auto' }}>
                <AudioPlayer audioFiles={audioFiles} />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}

export default App;