import {Composition} from 'remotion';
import {MyComposition} from './Composition';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="Empty"
				component={MyComposition}
				durationInFrames={60}
				fps={30}
				width={944}
				height={2044}
			/>
		</>
	);
};
