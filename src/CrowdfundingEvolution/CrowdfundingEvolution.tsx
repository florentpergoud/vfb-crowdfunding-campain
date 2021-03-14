import React from 'react';
import { AbsoluteFill, useVideoConfig } from 'remotion';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../theme';
import { Fillings } from './components/Fillings';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Scale } from './components/Scale';
import { Amounts } from './interface';
import { Thanks } from './Thanks';

const AMOUNTS: Amounts = {
    base: 2000,
    small: 4000,
    medium: 6000,
    high: 8000,
};

const CURRENT_AMOUNT = 7000;

const CONTENT_HORIZONTAL_PADDING = 75;

export const CrowdfundingEvolution: React.FC = () => {
    const { fps } = useVideoConfig();

    const fillingsDelay = 4.5 * fps;
    const scaleDelay = 0.5 * fps;
    const scaleDisappearanceDelay = 4 * fps;
    const footerDelay = 0.5 * fps;
    const thanksDelay = 4.5 * fps;

    return (
        <ThemeProvider theme={theme}>
            <Background />
            <ContentContainer>
                <Header />
                <StyledScale
                    amounts={AMOUNTS}
                    currentAmount={CURRENT_AMOUNT}
                    delay={scaleDelay}
                    disappearanceDelay={scaleDisappearanceDelay}
                />
                <Fillings delay={fillingsDelay} />
                <Thanks delay={thanksDelay} />
                <StyledFooter delay={footerDelay} />
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
    bottom: 96px;
`;
