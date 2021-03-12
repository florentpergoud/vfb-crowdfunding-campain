import { Img, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import styled from 'styled-components';
import neutralMandarine from '../../../assets/characters/Neutral-Mandarine.png';
import neutralMimo from '../../../assets/characters/Neutral-Mimo.png';
import { useAppearWithScaleAndBounce } from '../../animationHooks/useAppearWithScaleAndBounce';

interface Props {
    delay: number;
}

export const Footer: React.FC<Props> = ({ delay }) => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();
    const { scaleValue } = useAppearWithScaleAndBounce(delay);

    const entranceAnimationStartFrame = frame - delay;

    const entranceAnimation = spring({
        frame: entranceAnimationStartFrame,
        fps,
        config: { damping: 200 },
    });

    const inTranslateX = interpolate(entranceAnimation, [0, 1], [-350, 0]);

    return (
        <Container>
            <StyledImg src={neutralMimo} $translateXValue={inTranslateX} />
            <CentalTextContainer $scaleValue={scaleValue}>Merci !</CentalTextContainer>
            <StyledImg src={neutralMandarine} $translateXValue={-inTranslateX} />
        </Container>
    );
};

const Container = styled.div`
    margin-top: 14px;
    display: flex;
    justify-content: space-between;
`;

const StyledImg = styled(Img)<{ $translateXValue: number }>`
    margin-left: 12px;
    transform: ${({ $translateXValue }) => `translateX(${$translateXValue}px)`};
`;

const CentalTextContainer = styled.div<{ $scaleValue: number }>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    font-family: 'Barlow Condensed';
    font-style: normal;
    font-weight: 600;
    font-size: 84px;
    line-height: 84px;
    color: ${({ theme }) => theme.colors.secondary};
    transform: ${({ $scaleValue }) => `scale(${$scaleValue})`};
`;
