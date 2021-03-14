import styled from 'styled-components';
import { useAppearWithScaleAndBounce } from '../../animationHooks/useAppearWithScaleAndBounce';

interface Props {
    top: number;
    amount: number;
    delay?: number;
}

export const ScaleSmallAmount: React.FC<Props> = ({ top, amount, delay }) => {
    const { scaleValue } = useAppearWithScaleAndBounce(delay);

    return (
        <SmallAmountContainer $top={top} $scale={scaleValue}>
            <SmallDot />
            <AmountText>{amount}€</AmountText>
        </SmallAmountContainer>
    );
};

const AmountText = styled.div`
    font-family: 'Peace Sans';
    font-style: normal;
    font-weight: normal;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 60px;
    line-height: 83px;
`;

const SmallDot = styled.div`
    height: 37px;
    width: 37px;
    border-radius: 19px;
    margin-right: 93px;
    background: ${({ theme }) => theme.colors.secondary2};
`;

const SmallAmountContainer = styled.div<{ $top: number; $scale: number }>`
    display: flex;
    flex-direction: row;
    align-items: center;
    position: absolute;
    height: 96px;
    width: 100%;
    padding-left: 448px;
    top: ${({ $top }) => $top + 48}px;
    transform: ${({ $scale }) => `scale(${$scale})`};
`;
