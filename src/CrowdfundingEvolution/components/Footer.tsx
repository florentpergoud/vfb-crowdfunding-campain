import { useMemo } from 'react';
import { Easing, Img, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import styled from 'styled-components';
import neutralMandarine from '../../../assets/characters/Neutral-Mandarine.png';
import neutralMimo from '../../../assets/characters/Neutral-Mimo.png';
import smilingMandarine from '../../../assets/characters/Smiling-Mandarine.png';
import smilingMimo from '../../../assets/characters/Smiling-Mimo.png';

interface Props {
    delay: number;
    startJumpingDelay: number;
    className?: string;
}

export const Footer: React.FC<Props> = ({ delay, className, startJumpingDelay }) => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const entranceAnimationStartFrame = frame - delay;

    const entranceAnimation = spring({
        frame: entranceAnimationStartFrame,
        fps,
        config: { damping: 200 },
    });

    const inTranslateX = interpolate(entranceAnimation, [0, 1], [-350, 0]);

    const durationBeforeHappyFaces = 5;
    const shouldSwitchToHappyFaces = frame > durationBeforeHappyFaces * fps;

    const mimoFace = useMemo(() => (shouldSwitchToHappyFaces ? smilingMimo : neutralMimo), [shouldSwitchToHappyFaces]);
    const mandaFace = useMemo(() => (shouldSwitchToHappyFaces ? smilingMandarine : neutralMandarine), [
        shouldSwitchToHappyFaces,
    ]);

    const jumpingAnimation = frame > startJumpingDelay ? Math.cos(frame * 0.4) : -1;
    const translateY = interpolate(jumpingAnimation, [-1, 1], [0, -50], {
        easing: Easing.bezier(0.12, 0.55, 0.79, 0.94),
    });

    return (
        <Container className={className}>
            <StyledImg src={mimoFace} $translateXValue={inTranslateX} $translateY={translateY} />
            <StyledImg $isFlipped src={mandaFace} $translateXValue={-inTranslateX} $translateY={translateY} />
        </Container>
    );
};

const Container = styled.div`
    margin-top: 14px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 942px;
`;

const StyledImg = styled(Img).attrs<{ $translateXValue: number; $isFlipped?: boolean; $translateY?: number }>(
    ({ $translateXValue, $isFlipped, $translateY = 0 }) => ({
        style: {
            transform: `translateX(${$translateXValue}px) scaleX(${$isFlipped ? -1 : 1}) translateY(${$translateY}px)`,
        },
    }),
)<{ $translateXValue: number; $isFlipped?: boolean; $translateY?: number }>`
    height: 302px;
    width: 220px;
`;
