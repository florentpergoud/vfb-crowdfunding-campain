import { AbsoluteFill, Img } from 'remotion';
import styled from 'styled-components';
import blueCircleFilling from '../../../assets/BlueCircleFilling.png';
import crossFillings from '../../../assets/CrossFilling.png';
import zigzag from '../../../assets/Zigzag.png';

export const Fillings: React.FC = () => {
    return (
        <Container>
            <CrossFilling src={crossFillings} />
            <ZigzagFilling src={zigzag} />
            <CircleFilling src={blueCircleFilling} />
            <SecondZigzagFilling src={zigzag} />
            <Dot />
        </Container>
    );
};

const Container = styled(AbsoluteFill)``;

const CrossFilling = styled(Img)`
    position: absolute;
    width: 43.69px;
    height: 43.69px;
    left: 130px;
    top: 422.92px;
`;

const ZigzagFilling = styled(Img)`
    position: absolute;
    left: 184px;
    top: 737px;
`;

const SecondZigzagFilling = styled(Img)`
    position: absolute;
    top: 949px;
    right: 168px;
    transform: rotate(60deg);
`;

const CircleFilling = styled(Img)`
    position: absolute;
    top: 600px;
    right: 138px;
    transform: rotate(-24.22deg);
`;

const Dot = styled.div`
    position: absolute;
    top: 1324px;
    left: 147px;
    height: 38px;
    width: 38px;
    border-radius: 19px;
    background-color: ${({ theme }) => theme.colors.secondary};
`;
