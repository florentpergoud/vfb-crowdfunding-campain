import styled from 'styled-components';
import { useAppearWithScaleAndBounce } from '../../animationHooks/useAppearWithScaleAndBounce';

interface Props {
    top: number;
    amount: number;
    delay?: number;
}

export const ScaleMediumAmount: React.FC<Props> = ({ top, amount, delay }) => {
    const { scaleValue } = useAppearWithScaleAndBounce(delay);

    return (
        <MediumAmountContainer $top={top} $scale={scaleValue}>
            <MediumDot />
            <MediumAmountText>{amount}€</MediumAmountText>
        </MediumAmountContainer>
    );
};

const AmountText = styled.div`
    font-family: 'Peace Sans';
    font-style: normal;
    font-weight: normal;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.secondary2};
`;

const MediumAmountText = styled(AmountText)`
    font-size: 80px;
    line-height: 111px;
`;

const MediumDot = styled.div`
    height: 46px;
    width: 46px;
    border-radius: 23px;
    margin-left: 116px;
    background: ${({ theme }) => theme.colors.secondary2};
`;

const MediumAmountContainer = styled.div<{ $top: number; $scale: number }>`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 110px;
    padding-right: 442px;
    top: ${({ $top }) => $top + 55}px;
    transform: ${({ $scale }) => `scale(${$scale})`};
`;
