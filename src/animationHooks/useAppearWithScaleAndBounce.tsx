import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const useAppearWithScaleAndBounce = (delay = 0): { scaleValue: number } => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const bounceAnimation = spring({
        frame: frame - delay,
        fps,
        config: { damping: 10.5, stiffness: 160, mass: 0.6 },
    });

    const scaleValue = interpolate(bounceAnimation, [0, 1], [0, 1]);
    return { scaleValue };
};
