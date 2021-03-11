import { Img, interpolate, useCurrentFrame } from 'remotion';
import styled from 'styled-components';
import logoMiimosa from '../../../assets/logoMiimosa.png';

export const Header: React.FC = () => {
    const frame = useCurrentFrame();

    const getAppearanceRotation = (delay: number, durationInFrame: number) => {
        return interpolate(frame - delay, [0, durationInFrame], [90, 0], {
            extrapolateRight: 'clamp',
            extrapolateLeft: 'clamp',
        });
    };

    const headerFirstLineAppearance = getAppearanceRotation(0, 30);
    const headerSecondLineAppearance = getAppearanceRotation(30, 30);
    const headerThirdLineAppearance = getAppearanceRotation(60, 30);

    return (
        <Container>
            <LineContainer $rotateXdegrees={headerFirstLineAppearance}>
                <HeaderText>Participez</HeaderText>
            </LineContainer>
            <SecondLineContainer $rotateXdegrees={headerSecondLineAppearance}>
                <SecondLineTextContainer>
                    <HeaderText>à notre campagne de</HeaderText>
                    <HeaderTextVariant>crowdfunding</HeaderTextVariant>
                </SecondLineTextContainer>
                <UnderlineDash />
            </SecondLineContainer>
            <ThirdLineContainer $rotateXdegrees={headerThirdLineAppearance}>
                <HeaderTextSmall>sur</HeaderTextSmall>
                <StyledImg src={logoMiimosa} />
                <LogoDomainExtension>.com</LogoDomainExtension>
            </ThirdLineContainer>
        </Container>
    );
};

const Container = styled.div`
    align-items: center;
    margin-top: 124px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
const LineContainer = styled.div<{ $rotateXdegrees: number }>`
    transform: ${({ $rotateXdegrees }) => `rotateX(${$rotateXdegrees}deg)`};
`;

const HeaderText = styled.span`
    font-size: 72px;
    line-height: 70px;
    color: ${({ theme }) => theme.colors.secondary2};
    font-family: 'Barlow Condensed';
    letter-spacing: 0.04em;
`;

const SecondLineContainer = styled(LineContainer)`
    padding-top: 7px;
`;

const SecondLineTextContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const HeaderTextVariant = styled.span`
    font-size: 58px;
    line-height: 78px;
    font-family: 'Skippy Sharp';
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.secondary};
    margin-left: 24px;
    font-weight: 400px;
    padding-top: 4px;
`;

const ThirdLineContainer = styled(LineContainer)`
    display: flex;
    flex-direction: row;
    margin-top: 27px;
`;

const HeaderTextSmall = styled(HeaderText)`
    color: ${({ theme }) => theme.colors.secondary2};
    width: 69px;
    height: 71px;
    font-family: 'Barlow Condensed';
    font-style: normal;
    font-size: 56.7188px;
    line-height: 71px;
    letter-spacing: 0.04em;
`;

const UnderlineDash = styled.div`
    background: ${({ theme }) => theme.colors.secondary};
    width: 118px;
    height: 5px;
    border-radius: 2.89px;
    transform: rotate(-3deg);
    margin-left: 775px;
`;

const StyledImg = styled(Img)`
    margin-left: 12px;
`;

const LogoDomainExtension = styled.span`
    font-family: 'Barlow';
    font-weight: 600;
    font-size: 43px;
    line-height: 43px;
    letter-spacing: 0.04em;
    color: ${({ theme }) => theme.colors.miimosaBrand};
    margin-top: 18px;
    margin-left: 6px;
`;
