/* eslint-disable react/prop-types */
import { useRef, useEffect, useState } from 'react';
import WaveSurfer from 'wavesurfer.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faPlay,
	faPause,
	faVolumeUp,
	faVolumeDown,
	faVolumeMute,
	faVolumeOff,
    faChevronLeft,
    faChevronRight
} from '@fortawesome/free-solid-svg-icons';

const formWaveSurferOptions = (ref) => ({
	container: ref,
	waveColor: '#ccc',
	progressColor: '#0100ff',
	cursorColor: 'transparent',
	responsive: true,
	height: 40,  // Reduced from 80 to 50
	normalize: true,
	backend: 'WebAudio',
	barWidth: 2,
	barGap: 3,
});

// Helper function to format time
function formatTime(seconds) {
	let date = new Date(0);
	date.setSeconds(seconds);
	return date.toISOString().substr(11, 8);
}

export default function AudioPlayer({ audioFiles }) {
	const waveformRef = useRef(null);
	const wavesurfer = useRef(null);
	const [playing, setPlaying] = useState(false);
	const [volume, setVolume] = useState(0.5);
	const [muted, setMuted] = useState(false);
	const [duration, setDuration] = useState(0);
	const [currentTime, setCurrentTime] = useState(0);
	const [currentAudioIndex, setCurrentAudioIndex] = useState(0);
	const [audioFileName, setAudioFileName] = useState('');

	// Initialize WaveSurfer and set up event listeners
	useEffect(() => {
		const options = formWaveSurferOptions(waveformRef.current);
		wavesurfer.current = WaveSurfer.create(options);

		// Load the initial audio file
		wavesurfer.current.load(audioFiles[currentAudioIndex].file);

		wavesurfer.current.on('ready', () => {
			setVolume(wavesurfer.current.getVolume());
			setDuration(wavesurfer.current.getDuration());
			setAudioFileName(audioFiles[currentAudioIndex].name);
		});

		wavesurfer.current.on('audioprocess', () => {
			setCurrentTime(wavesurfer.current.getCurrentTime());
		});

		return () => {
			wavesurfer.current.un('audioprocess');
			wavesurfer.current.un('ready');
			wavesurfer.current.destroy();
		};
	}, [audioFiles, currentAudioIndex]);

	// Toggle playback of audio
	const handlePlayPause = () => {
		setPlaying(!playing);
		wavesurfer.current.playPause();
	};

	// Adjust audio volume
	const handleVolumeChange = (newVolume) => {
		setVolume(newVolume);
		wavesurfer.current.setVolume(newVolume);
		setMuted(newVolume === 0);
	};

	// Toggle mute/unmute audio
	const handleMute = () => {
		setMuted(!muted);
		wavesurfer.current.setVolume(muted ? volume : 0);
	};

	// Increase volume by 10%
	const handleVolumeUp = () => {
		handleVolumeChange(Math.min(volume + 0.1, 1));
	};

	// Decrease volume by 10%
	const handleVolumeDown = () => {
		handleVolumeChange(Math.max(volume - 0.1, 0));
	};

	const handleAudioSwitch = (index) => {
		if (index === currentAudioIndex) return;
		
		setPlaying(false);
		setCurrentAudioIndex(index);
		wavesurfer.current.stop();
		wavesurfer.current.load(audioFiles[index].file);
	};

	return (
		<div className="audio-player-container p-4">
			<div className="flex justify-center mb-3">
				<div className='bg-black-400/50 backdrop-blur-lg rounded-2xl px-6 py-3 flex items-center justify-center gap-3'>
					<button
						onClick={() => handleAudioSwitch((currentAudioIndex - 1 + audioFiles.length) % audioFiles.length)}
						className="px-3 py-1.5 rounded-2xl bg-black/70 backdrop-blur-3xl text-gray-200 hover:bg-gray-600/50 text-sm"
					>
						<FontAwesomeIcon icon={faChevronLeft} />
					</button>
					<span className="text-gray-300 text-sm">{audioFiles[currentAudioIndex].name}</span>
					<button
						onClick={() => handleAudioSwitch((currentAudioIndex + 1) % audioFiles.length)}
						className="px-3 py-1.5 rounded-2xl bg-black/70 backdrop-blur-3xl text-gray-200 hover:bg-gray-600/50 text-sm"
					>
						<FontAwesomeIcon icon={faChevronRight} />
					</button>
				</div>
			</div>
			<div className="flex justify-center">
				<div className='bg-black-400/50 backdrop-blur-lg rounded-2xl p-3 w-[600px]'>
					<div id='waveform' ref={waveformRef} style={{ width: '100%' }}></div>
				</div>
			</div>
			<div className='controls my-4 mx-4 flex justify-center items-center gap-3'>
				<button onClick={handlePlayPause} className="text-sm">
					<FontAwesomeIcon icon={playing ? faPause : faPlay} />
				</button>
				<button onClick={handleMute} className="text-sm">
					<FontAwesomeIcon icon={muted ? faVolumeOff : faVolumeMute} />
				</button>
				<input
					type='range'
					id='volume'
					name='volume'
					min='0'
					max='1'
					step='0.05'
					value={muted ? 0 : volume}
					onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
					className="w-24"
				/>
				<button onClick={handleVolumeDown} className="text-sm">
					<FontAwesomeIcon icon={faVolumeDown} />
				</button>
				<button onClick={handleVolumeUp} className="text-sm">
					<FontAwesomeIcon icon={faVolumeUp} />
				</button>
			</div>
			<div className='flex justify-center'>
				<div className='bg-white-1000/60 backdrop-blur-lg rounded-2xl px-6 py-3'>
					<div className='audio-info text-center'>
						<span className="block text-gray-300 text-sm">
							Playing: {audioFileName}
						</span>
						<span className="block mt-2 text-gray-300 text-sm">
							Duration: {formatTime(duration)} | Current Time: {formatTime(currentTime)}
						</span>
						<span className="block mt-2 text-gray-300 text-sm">
							Volume: {Math.round(volume * 100)}%
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}