import React from 'react';
import { AbsoluteFill } from 'remotion';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../theme';
import { Fillings } from './components/Fillings';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Scale } from './components/Scale';
import { Amounts } from './interface';

const AMOUNTS: Amounts = {
    base: 2000,
    small: 4000,
    medium: 6000,
    high: 8000,
};

const CURRENT_AMOUNT = 4234;

const CONTENT_HORIZONTAL_PADDING = 75;

export const CrowdfundingEvolution: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <Background />
            <ContentContainer>
                <Header />
                <Fillings />
                <StyledScale amounts={AMOUNTS} currentAmount={CURRENT_AMOUNT} delay={60} />
                <Footer delay={30} />
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
