import { AbsoluteFill, Img, interpolate, useCurrentFrame } from 'remotion';
import styled from 'styled-components';
import blueCircleFilling from '../../../assets/BlueCircleFilling.png';
import crossFillings from '../../../assets/CrossFilling.png';
import zigzag from '../../../assets/Zigzag.png';
import { useAppearWithScaleAndBounce } from '../../animationHooks/useAppearWithScaleAndBounce';

interface Props {
    delay: number;
}

export const Fillings: React.FC<Props> = ({ delay }) => {
    const frame = useCurrentFrame();
    const { scaleValue } = useAppearWithScaleAndBounce(delay);

    const rotationValue = interpolate(frame - delay, [0, 30], [0, 180]);

    return (
        <Container $scale={scaleValue}>
            <CrossFilling src={crossFillings} $rotationValue={rotationValue} />
            <ZigzagFilling src={zigzag} $rotationValue={rotationValue} />
            <CircleFilling src={blueCircleFilling} />
            <SecondZigzagFilling src={zigzag} $rotationValue={rotationValue} />
            <Dot />
        </Container>
    );
};

const Container = styled(AbsoluteFill)<{ $scale: number }>`
    transform: ${({ $scale }) => `scale(${$scale})`};
`;

const CrossFilling = styled(Img)<{ $rotationValue: number }>`
    position: absolute;
    width: 43.69px;
    height: 43.69px;
    left: 130px;
    top: 422.92px;
    transform: ${({ $rotationValue }) => `rotate(${$rotationValue}deg)`};
`;

const ZigzagFilling = styled(Img)<{ $rotationValue: number }>`
    position: absolute;
    left: 184px;
    top: 737px;
    animation: rotation 2s infinite linear;
    transform: ${({ $rotationValue }) => `rotate(${$rotationValue}deg)`};
`;

const SecondZigzagFilling = styled(Img)<{ $rotationValue: number }>`
    position: absolute;
    top: 949px;
    right: 168px;
    transform: ${({ $rotationValue }) => `rotate(${$rotationValue + 90}deg)`};
`;

const CircleFilling = styled(Img)`
    position: absolute;
    top: 600px;
    right: 138px;
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
