import {useVideoConfig} from 'remotion';

export const HelloWorld = () => {
	const {fps, durationInFrames, width, height} = useVideoConfig();

	return (
		<div style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
			This video is {durationInFrames / fps} seconds long.
		</div>
	);
};
