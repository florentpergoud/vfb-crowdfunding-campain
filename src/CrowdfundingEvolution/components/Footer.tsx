import { Img, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import styled from 'styled-components';
import neutralMandarine from '../../../assets/characters/Neutral-Mandarine.png';
import neutralMimo from '../../../assets/characters/Neutral-Mimo.png';

interface Props {
    delay: number;
    className?: string;
}

export const Footer: React.FC<Props> = ({ delay, className }) => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const entranceAnimationStartFrame = frame - delay;

    const entranceAnimation = spring({
        frame: entranceAnimationStartFrame,
        fps,
        config: { damping: 200 },
    });

    const inTranslateX = interpolate(entranceAnimation, [0, 1], [-350, 0]);

    return (
        <Container className={className}>
            <StyledImg src={neutralMimo} $translateXValue={inTranslateX} />
            <StyledImg src={neutralMandarine} $translateXValue={-inTranslateX} />
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

const StyledImg = styled(Img)<{ $translateXValue: number }>`
    transform: ${({ $translateXValue }) => `translateX(${$translateXValue}px)`};
`;
