import React from 'react';
import { Img, interpolate, useCurrentFrame, useVideoConfig } from 'remotion';
import styled from 'styled-components';
import littleBean from '../../../assets/littleBean.png';
import { Amounts } from '../interface';
import { ScaleBackground } from './ScaleBackground';
import { ScaleMediumAmount } from './ScaleMediumAmount';
import { ScaleSmallAmount } from './ScaleSmallAmount';

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
                <ScaleMediumAmount top={mediumAmountYAxisPosition} amount={medium} />
                <ScaleSmallAmount top={smallAmountYAxisPosition} amount={small} />
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

const ScaleBodyContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    width: 100%;
`;

const Bean = styled(Img)<{ $translateYValue: number }>`
    position: absolute;
    top: ${({ $translateYValue }) => $translateYValue}px};
`;
