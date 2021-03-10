import { AbsoluteFill } from 'remotion';
import styled from 'styled-components';

const SCALE_HEIGHT = 844;

interface Props {
    amounts: {
        low: number;
        medium: number;
        high: number;
    };
}

export const Scale: React.FC<Props> = ({ amounts: { low, medium, high } }) => {
    return (
        <Container>
            <HighAmountText>{`${high}€`}</HighAmountText>
            <ScaleBodyContainer>
                <HighAmountDot />
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
                <BaseDot />
            </ScaleBodyContainer>
        </Container>
    );
};

const Container = styled(AbsoluteFill)`
    align-items: center;
    padding-top: 466px;
`;

const AmountText = styled.div`
    font-family: 'Peace Sans';
    font-style: normal;
    font-weight: normal;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.secondary2};
`;

const ScaleBodyContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Dot = styled.div`
    background: ${({ theme }) => theme.colors.secondary2};
    height: 54px;
    width: 54px;
    border-radius: 27px;
`;

const HighAmountText = styled(AmountText)`
    font-size: 102px;
    line-height: 142px;
`;

const HighAmountDot = styled(Dot)`
    margin-top: 54px;
`;

const Dash = styled.div`
    width: 5px;
    height: 20px;
    background: ${({ theme }) => theme.colors.secondary2};
    margin-top: 20px;
`;

const BaseDot = styled(Dot)`
    height: 28px;
    width: 28px;
    border-radius: 14px;
    margin-top: 5px;
`;
