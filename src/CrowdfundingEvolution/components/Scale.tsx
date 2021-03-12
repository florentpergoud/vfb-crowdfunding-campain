import { interpolate, useCurrentFrame, useVideoConfig } from 'remotion';
import styled from 'styled-components';
import { Amounts } from '../interface';

interface Props {
    amounts: Amounts;
    currentAmount: number;
    delay: number;
    className?: string;
}

const SCALE_HEIGHT = 803;
const SCALE_ANIMATION_DURATION = 4;

export const Scale: React.FC<Props> = ({ amounts: { base, small, medium, high }, currentAmount, className, delay }) => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const mediumAmountYAxisPosition = SCALE_HEIGHT - ((medium - base) / (high - base)) * SCALE_HEIGHT;
    const smallAmountYAxisPosition = SCALE_HEIGHT - ((small - base) / (high - base)) * SCALE_HEIGHT;

    const amountAnimationDuration = SCALE_ANIMATION_DURATION * fps;
    const amountAnimation = interpolate(frame - delay, [0, amountAnimationDuration], [0, currentAmount], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp',
    });
    console.log('amountAnimation', JSON.stringify(amountAnimation, null, 2));

    return (
        <Container className={className}>
            <HighAmountText>{`${Math.round(amountAnimation)}€`}</HighAmountText>
            <ScaleBodyContainer>
                <EnormousDot />
                <Dash />
                <Dash />
                <Dash />
                <Dash />
                <Dash />
                <Dash />
                <Dash />
                <Dash />
                <Dash />
                <Dash />
                <Dash />
                <Dash />
                <Dash />
                <Dash />
                <Dash />
                <Dash />
                <Dash />
                <Dash />
                <Dash />
                <BottomDot />
                <MediumAmountContainer $top={mediumAmountYAxisPosition}>
                    <MediumDot />
                    <MediumAmountText>{medium}€</MediumAmountText>
                </MediumAmountContainer>
                <SmallAmountContainer $top={smallAmountYAxisPosition}>
                    <SmallDot />
                    <SmallAmountText>{small}€</SmallAmountText>
                </SmallAmountContainer>
            </ScaleBodyContainer>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const AmountText = styled.div`
    font-family: 'Peace Sans';
    font-style: normal;
    font-weight: normal;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.secondary2};
`;

const HighAmountText = styled(AmountText)`
    font-size: 102px;
    line-height: 142px;
`;

const MediumAmountText = styled(AmountText)`
    font-size: 80px;
    line-height: 111px;
`;

const SmallAmountText = styled(AmountText)`
    font-size: 70px;
    line-height: 97px;
`;

const ScaleBodyContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    width: 100%;
`;

const BaseDot = styled.div`
    background: ${({ theme }) => theme.colors.secondary2};
`;

const Dash = styled.div`
    width: 5px;
    height: 20px;
    background: ${({ theme }) => theme.colors.secondary2};
    margin-top: 20px;
`;

const EnormousDot = styled(BaseDot)`
    margin-top: 54px;
    height: 54px;
    width: 54px;
    border-radius: 27px;
`;

const MediumDot = styled(BaseDot)`
    height: 46px;
    width: 46px;
    border-radius: 23px;
    margin-left: 116px;
`;

const SmallDot = styled(BaseDot)`
    height: 37px;
    width: 37px;
    border-radius: 19px;
    margin-right: 93px;
`;

const BottomDot = styled(BaseDot)`
    height: 28px;
    width: 28px;
    border-radius: 14px;
    margin-top: 5px;
`;

const MediumAmountContainer = styled.div<{ $top: number }>`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 110px;
    padding-right: 442px;
    top: ${({ $top }) => $top + 55}px;
`;

const SmallAmountContainer = styled.div<{ $top: number }>`
    display: flex;
    flex-direction: row;
    align-items: center;
    position: absolute;
    height: 96px;
    width: 100%;
    padding-left: 448px;
    top: ${({ $top }) => $top + 48}px;
`;
