import styled from 'styled-components';

interface Props {
    className?: string;
}

export const ScaleBackground: React.FC<Props> = ({ className }) => {
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
            <BottomDot />
        </BaseScale>
    );
};

const BaseScale = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    width: 100%;
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

const BottomDot = styled.div`
    height: 28px;
    width: 28px;
    border-radius: 14px;
    margin-top: 5px;
    background: ${({ theme }) => theme.colors.secondary2};
`;
