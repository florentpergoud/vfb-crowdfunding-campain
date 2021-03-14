import { useCurrentFrame } from 'remotion';

const plotOnBell = (x: number, scale?: boolean): number => {
    //This is the real workhorse of this algorithm. It returns values along a bell curve from 0 - 1 - 0 with an input of 0 - 1.

    const stdD = 0.125;
    const mean = 0.5;
    if (scale) {
        return (
            1 /
            ((1 / (stdD * Math.sqrt(2 * Math.PI))) *
                Math.pow(Math.E, (-1 * Math.pow(x - mean, 2)) / (2 * Math.pow(stdD, 2))))
        );
    } else {
        return (
            (1 / (stdD * Math.sqrt(2 * Math.PI))) *
            Math.pow(Math.E, (-1 * Math.pow(x - mean, 2)) / (2 * Math.pow(stdD, 2))) *
            plotOnBell(0.5, true)
        );
    }
};

export const useBellUtils = (delay = 0, duration = 30): { bellCurveAnimatedValue: number } => {
    const frame = useCurrentFrame();

    if (frame > delay + duration || frame < delay) return { bellCurveAnimatedValue: 0 };

    const xValue = (frame - delay) / duration;

    return { bellCurveAnimatedValue: plotOnBell(xValue) };
};
