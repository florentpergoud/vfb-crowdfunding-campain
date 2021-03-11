import React from 'react';
import { AbsoluteFill } from 'remotion';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../theme';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Scale } from './components/Scale';

const AMOUNTS = {
    small: 2000,
    medium: 5000,
    high: 8000,
};

const CONTENT_HORIZONTAL_PADDING = 75;

const CURRENT_AMOUNT = 2345;

export const CrowdfundingEvolution: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <Background />
            <ContentContainer>
                <Header />
                <StyledScale amounts={AMOUNTS} />
                <Footer currentAmount={CURRENT_AMOUNT} />
            </ContentContainer>
        </ThemeProvider>
    );
};

const Background = styled(AbsoluteFill)`
    background: ${({ theme }) => theme.colors.white};
`;

const StyledScale = styled(Scale)`
    margin-top: 58px;
`;

const ContentContainer = styled(AbsoluteFill)`
    padding-left: ${CONTENT_HORIZONTAL_PADDING}px;
    padding-right: ${CONTENT_HORIZONTAL_PADDING}px;
`;
