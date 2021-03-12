import { Img, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import styled from 'styled-components';
import neutralMandarine from '../../../assets/characters/Neutral-Mandarine.png';
import neutralMimo from '../../../assets/characters/Neutral-Mimo.png';

interface Props {
    currentAmount: number;
    delay: number;
}

export const Footer: React.FC<Props> = ({ currentAmount, delay }) => {
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
        <Container>
            <StyledImg src={neutralMimo} $translateXValue={inTranslateX} />
            <CentalTextContainer>
                {`déjà ${currentAmount}€`}
                <LighterText>Merci !</LighterText>
            </CentalTextContainer>
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

const CentalTextContainer = styled.div`
    margin-top: 33px;
    display: flex;
    flex-direction: column;
    align-items: center;

    font-family: 'Barlow Condensed';
    font-style: normal;
    font-weight: 600;
    font-size: 70px;
    line-height: 84px;
    color: ${({ theme }) => theme.colors.secondary2};
`;

const LighterText = styled.span`
    margin-top: 8px;
    color: ${({ theme }) => theme.colors.secondary};
`;
