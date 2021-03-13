import React, { useMemo } from 'react';
import { Img, interpolate, useCurrentFrame, useVideoConfig } from 'remotion';
import styled from 'styled-components';
import littleBean from '../../../assets/littleBean.png';
import { useAppearWithScaleAndBounce } from '../../animationHooks/useAppearWithScaleAndBounce';
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

const SCALE_HEIGHT = 950;
const SCALE_ANIMATION_DURATION = 2.5;

const BEAN_Y_OFFSET = 30;

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

const shouldDisplayScaleAmount = (amountValueAnimation: number, currentAmount: number, scaleAmount: number) => {
    return amountValueAnimation >= scaleAmount || amountValueAnimation === currentAmount;
};

export const Scale: React.FC<Props> = ({ amounts: { base, small, medium, high }, currentAmount, className, delay }) => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const { scaleValue } = useAppearWithScaleAndBounce(delay);

    const apparitionDuration = 1 * fps;

    const mediumAmountYAxisPosition = getYPositionForValue({ baseValue: base, highValue: high, value: medium });
    const smallAmountYAxisPosition = getYPositionForValue({ baseValue: base, highValue: high, value: small });

    const amountAnimationDuration = SCALE_ANIMATION_DURATION * fps;

    const amountValueAnimation = interpolate(
        frame - delay - apparitionDuration,
        [0, amountAnimationDuration],
        [base, currentAmount],
        {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
        },
    );

    const translateBeanYValue =
        getYPositionForValue({ baseValue: base, highValue: high, value: amountValueAnimation }) + BEAN_Y_OFFSET;

    const shouldDisplayScaleMediumAmount = useMemo(
        () => shouldDisplayScaleAmount(amountValueAnimation, currentAmount, medium),
        [amountValueAnimation, currentAmount, medium],
    );
    const shouldDisplayScaleSmallAmount = useMemo(
        () => shouldDisplayScaleAmount(amountValueAnimation, currentAmount, small),
        [amountValueAnimation, currentAmount, small],
    );

    return (
        <Container className={className} $scale={scaleValue}>
            <HighAmountText>{`${Math.round(amountValueAnimation)}€`}</HighAmountText>
            <ScaleBodyContainer>
                <ScaleBackground translateBeanYValue={translateBeanYValue} scaleHeight={SCALE_HEIGHT} />
                {shouldDisplayScaleMediumAmount && (
                    <ScaleMediumAmount top={mediumAmountYAxisPosition} amount={medium} />
                )}
                {shouldDisplayScaleSmallAmount && <ScaleSmallAmount top={smallAmountYAxisPosition} amount={small} />}
                <Bean src={littleBean} $translateYValue={translateBeanYValue} />
            </ScaleBodyContainer>
        </Container>
    );
};

const Container = styled.div<{ $scale: number }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: ${({ $scale }) => `scale(${$scale})`};
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
    font-size: 150px;
    line-height: 208px;
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
