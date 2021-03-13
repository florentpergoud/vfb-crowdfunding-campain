import styled from 'styled-components';

interface Props {
    className?: string;
    translateBeanYValue: number;
    scaleHeight: number;
}
const BAR_OFFSET = 70;
const BOTTOM_DOT_OFFSET = 54;

export const ScaleBackground: React.FC<Props> = ({ className, translateBeanYValue, scaleHeight }) => {
    return (
        <BaseScale className={className}>
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
            <Dash />
            <Dash />
            <Dash />
            <Dash />
            <AmountReceivedBar $height={translateBeanYValue} $scaleHeight={scaleHeight} />
            <BottomDot $height={scaleHeight} />
        </BaseScale>
    );
};

const BaseScale = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    width: 100%;
    position: relative;
`;

const Dash = styled.div`
    width: 5px;
    height: 21px;
    background: ${({ theme }) => theme.colors.secondary2};
    margin-top: 18px;
`;

const EnormousDot = styled.div`
    margin-top: 54px;
    height: 54px;
    width: 54px;
    border-radius: 27px;
    background: ${({ theme }) => theme.colors.secondary2};
`;

const BottomDot = styled.div<{ $height: number }>`
    height: 28px;
    width: 28px;
    border-radius: 14px;
    position: absolute;
    top: ${({ $height }) => $height + BOTTOM_DOT_OFFSET}px;
    background: ${({ theme }) => theme.colors.secondary2};
`;
const AmountReceivedBar = styled.div<{ $height: number; $scaleHeight: number }>`
    position: absolute;
    width: 24px;
    height: ${({ $height, $scaleHeight }) => $scaleHeight - $height}px;
    top: ${({ $height }) => $height + BAR_OFFSET}px;
    background-color: ${({ theme }) => theme.colors.secondary};
`;
