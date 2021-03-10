import { Composition } from 'remotion';
import { CrowdfundingEvolution } from './CrowdfundingEvolution/CrowdfundingEvolution';
import './font.css';

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
