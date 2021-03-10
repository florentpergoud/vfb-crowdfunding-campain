import React from 'react';
import { AbsoluteFill } from 'remotion';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../theme';
import { Header } from './Header';
import { Scale } from './Scale';

const AMOUNTS = {
    low: 2000,
    medium: 5000,
    high: 8000,
};

export const CrowdfundingEvolution: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <Background />
            <Header />
            <Scale amounts={AMOUNTS} />
        </ThemeProvider>
    );
};

const Background = styled(AbsoluteFill)`
    background: ${({ theme }) => theme.colors.white};
`;
