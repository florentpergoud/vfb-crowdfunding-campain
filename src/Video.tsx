import { Composition } from 'remotion';
import '../assets/font.css';
import { CrowdfundingEvolution } from './CrowdfundingEvolution/CrowdfundingEvolution';

const INSTAGRAM_STORY_CONF = {
    fps: 30,
    width: 1080,
    height: 1920,
    durationInSeconds: 7,
};

export const RemotionVideo: React.FC = () => {
    const { fps, width, height, durationInSeconds } = INSTAGRAM_STORY_CONF;
    return (
        <Composition
            id="CrowdfundingEvolution"
            component={CrowdfundingEvolution}
            durationInFrames={fps * durationInSeconds}
            fps={fps}
            width={width}
            height={height}
        />
    );
};
