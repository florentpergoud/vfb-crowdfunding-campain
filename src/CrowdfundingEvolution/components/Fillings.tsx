import { AbsoluteFill, Img, interpolate, useCurrentFrame } from 'remotion';
import styled from 'styled-components';
import blueCircle from '../../../assets/blueCircle.png';
import bluecrossFillings from '../../../assets/blueCross.png';
import blueZigzag from '../../../assets/blueZigzag.png';
import crossFillings from '../../../assets/CrossFilling.png';
import lightBlueCircle from '../../../assets/lightBlueCircle.png';
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
            <BlueCrossFilling src={bluecrossFillings} $rotationValue={rotationValue} />
            <ZigzagFilling src={zigzag} $rotationValue={rotationValue} />
            <BlueZigzagFilling src={blueZigzag} $rotationValue={rotationValue} />
            <LightBlueCircleFilling src={lightBlueCircle} />
            <BlueCircleFilling src={blueCircle} />
            <SecondZigzagFilling src={zigzag} $rotationValue={rotationValue} />
            <Dot />
            <YellowDot />
        </Container>
    );
};

const Container = styled(AbsoluteFill)<{ $scale: number }>`
    transform: ${({ $scale }) => `scale(${$scale})`};
`;

const CrossFilling = styled(Img).attrs<{ $rotationValue: number }>(({ $rotationValue }) => ({
    style: {
        transform: `rotate(${$rotationValue}deg)`,
    },
}))<{ $rotationValue: number }>`
    position: absolute;
    width: 43.69px;
    height: 43.69px;
    right: 80px;
    top: 1254px;
`;

const BlueCrossFilling = styled(Img).attrs<{ $rotationValue: number }>(({ $rotationValue }) => ({
    style: {
        transform: `rotate(${$rotationValue}deg)`,
    },
}))<{ $rotationValue: number }>`
    position: absolute;
    width: 43.69px;
    height: 43.69px;
    right: 500px;
    top: 737px;
`;

const ZigzagFilling = styled(Img).attrs<{ $rotationValue: number }>(({ $rotationValue }) => ({
    style: {
        transform: `rotate(${$rotationValue}deg)`,
    },
}))<{ $rotationValue: number }>`
    position: absolute;
    left: 184px;
    top: 737px;
    animation: rotation 2s infinite linear;
`;

const BlueZigzagFilling = styled(Img).attrs<{ $rotationValue: number }>(({ $rotationValue }) => ({
    style: {
        transform: `rotate(${$rotationValue}deg)`,
    },
}))<{ $rotationValue: number }>`
    position: absolute;
    top: 1308px;
    left: 428px;
    animation: rotation 2s infinite linear;
`;

const SecondZigzagFilling = styled(Img).attrs<{ $rotationValue: number }>(({ $rotationValue }) => ({
    style: {
        transform: `rotate(${$rotationValue + 90}deg)`,
    },
}))<{ $rotationValue: number }>`
    position: absolute;
    top: 840px;
    right: 76px;
`;

const LightBlueCircleFilling = styled(Img)`
    position: absolute;
    top: 600px;
    right: 138px;
`;

const BlueCircleFilling = styled(Img)`
    position: absolute;
    top: 1532px;
    left: 595px;
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

const YellowDot = styled(Dot)`
    background-color: ${({ theme }) => theme.colors.primary1};
    top: 1332px;
    left: 687px;
`;
