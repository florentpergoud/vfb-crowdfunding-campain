import { useState } from 'react';
import { spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const useAppearWithScaleAndBounce = (delay = 0): { scaleValue: number } => {
    const frame = useCurrentFrame();
    const [initialFrame] = useState(frame);

    const { fps } = useVideoConfig();

    const bounceAnimation = spring({
        frame: frame - initialFrame - delay,
        fps,
        config: { damping: 10.5, stiffness: 160, mass: 0.6 },
    });

    return { scaleValue: bounceAnimation };
};
