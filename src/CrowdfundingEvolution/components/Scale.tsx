import React from 'react';
import { Img, interpolate, useCurrentFrame, useVideoConfig } from 'remotion';
import styled from 'styled-components';
import littleBean from '../../../assets/littleBean.png';
import { Amounts } from '../interface';
import { ScaleBackground } from './ScaleBackground';

interface Props {
    amounts: Amounts;
    currentAmount: number;
    delay: number;
    className?: string;
}

const SCALE_HEIGHT = 803;
const SCALE_ANIMATION_DURATION = 2.5;
const BEAN_Y_OFFSET = 20;

const getYPositionForValue = ({
    highValue,
    baseValue,
    value,
}: {
    highValue: number;
    baseValue: number;
    value: number;
}) => {
    return SCALE_HEIGHT * ((highValue - value) / (highValue - baseValue));
};

export const Scale: React.FC<Props> = ({ amounts: { base, small, medium, high }, currentAmount, className, delay }) => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const mediumAmountYAxisPosition = getYPositionForValue({ baseValue: base, highValue: high, value: medium });
    const smallAmountYAxisPosition = getYPositionForValue({ baseValue: base, highValue: high, value: small });

    const amountAnimationDuration = SCALE_ANIMATION_DURATION * fps;

    const amountValueAnimation = interpolate(frame - delay, [0, amountAnimationDuration], [base, currentAmount], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp',
    });

    const translateBeanYValue =
        getYPositionForValue({ baseValue: base, highValue: high, value: amountValueAnimation }) + BEAN_Y_OFFSET;

    return (
        <Container className={className}>
            <HighAmountText>{`${Math.round(amountValueAnimation)}€`}</HighAmountText>
            <ScaleBodyContainer>
                <ScaleBackground />
                <MediumAmountContainer $top={mediumAmountYAxisPosition}>
                    <MediumDot />
                    <MediumAmountText>{medium}€</MediumAmountText>
                </MediumAmountContainer>
                <SmallAmountContainer $top={smallAmountYAxisPosition}>
                    <SmallDot />
                    <SmallAmountText>{small}€</SmallAmountText>
                </SmallAmountContainer>
                <Bean src={littleBean} $translateYValue={translateBeanYValue} />
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

const MediumDot = styled.div`
    height: 46px;
    width: 46px;
    border-radius: 23px;
    margin-left: 116px;
    background: ${({ theme }) => theme.colors.secondary2};
`;

const SmallDot = styled.div`
    height: 37px;
    width: 37px;
    border-radius: 19px;
    margin-right: 93px;
    background: ${({ theme }) => theme.colors.secondary2};
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

const Bean = styled(Img)<{ $translateYValue: number }>`
    position: absolute;
    top: ${({ $translateYValue }) => $translateYValue}px};
`;
