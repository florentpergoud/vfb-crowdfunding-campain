import React from 'react';
import { AbsoluteFill, useVideoConfig } from 'remotion';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../theme';
import values from '../values.json';
import { Fillings } from './components/Fillings';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Scale } from './components/Scale';
import { Amounts } from './interface';
import { Thanks } from './Thanks';

const AMOUNTS: Amounts = {
    base: 0,
    small: 4000,
    medium: 8000,
    high: 12000,
};

const CONTENT_HORIZONTAL_PADDING = 75;

interface Props {
    currentAmount: number;
}

export const CrowdfundingEvolution: React.FC<Props> = () => {
    const { currentAmount } = values;
    const { fps } = useVideoConfig();

    const scaleDelay = 1 * fps;
    const scaleDisappearanceDelay = 3.75 * fps;
    const footerDelay = 0.5 * fps;
    const fillingsDelay = 4.75 * fps;
    const thanksDelay = 4.75 * fps;
    const startJumpingDelay = 5 * fps;

    return (
        <ThemeProvider theme={theme}>
            <Background />
            <ContentContainer>
                <Header />
                <StyledScale
                    amounts={AMOUNTS}
                    currentAmount={currentAmount}
                    delay={scaleDelay}
                    disappearanceDelay={scaleDisappearanceDelay}
                />
                <Fillings delay={fillingsDelay} />
                <Thanks delay={thanksDelay} />
                <StyledFooter delay={footerDelay} startJumpingDelay={startJumpingDelay} />
            </ContentContainer>
        </ThemeProvider>
    );
};

const Background = styled(AbsoluteFill)`
    background: ${({ theme }) => theme.colors.hotwhite};
`;

const StyledScale = styled(Scale)`
    margin-top: 62px;
`;

const ContentContainer = styled(AbsoluteFill)`
    padding-left: ${CONTENT_HORIZONTAL_PADDING}px;
    padding-right: ${CONTENT_HORIZONTAL_PADDING}px;
`;

const StyledFooter = styled(Footer)`
    position: absolute;
    bottom: 143px;
`;
