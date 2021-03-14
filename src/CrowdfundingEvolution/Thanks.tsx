import { AbsoluteFill } from 'remotion';
import styled from 'styled-components';
import { useAppearWithScaleAndBounce } from '../animationHooks/useAppearWithScaleAndBounce';

interface Props {
    delay?: number;
}

export const Thanks: React.FC<Props> = ({ delay }) => {
    const { scaleValue } = useAppearWithScaleAndBounce(delay);

    return (
        <Container $scale={scaleValue}>
            <ContentContainer>
                <FirstLine>Merci pour</FirstLine>
                <Text>votre soutien !</Text>
            </ContentContainer>
        </Container>
    );
};

const Container = styled(AbsoluteFill)<{ $scale: number }>`
    transform: ${({ $scale }) => `scale(${$scale})`};
`;

const ContentContainer = styled.div`
    margin-top: 800px;
    margin-left: 91px;
    margin-right: 91px;
    height: 731px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Text = styled.span`
    font-family: Barlow Condensed;
    font-style: normal;
    font-weight: 600;
    font-size: 150px;
    line-height: 180px;
    color: ${({ theme }) => theme.colors.secondary};
    transform: rotate(-7.11deg);
`;

const FirstLine = styled(Text)`
    margin-top: 70px;
    margin-right: 40px;
`;
