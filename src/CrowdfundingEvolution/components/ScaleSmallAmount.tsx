import styled from 'styled-components';

interface Props {
    top: number;
    amount: number;
}

export const ScaleSmallAmount: React.FC<Props> = ({ top, amount }) => {
    return (
        <SmallAmountContainer $top={top}>
            <SmallDot />
            <SmallAmountText>{amount}€</SmallAmountText>
        </SmallAmountContainer>
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

const SmallAmountText = styled(AmountText)`
    font-size: 70px;
    line-height: 97px;
`;

const SmallDot = styled.div`
    height: 37px;
    width: 37px;
    border-radius: 19px;
    margin-right: 93px;
    background: ${({ theme }) => theme.colors.secondary2};
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
