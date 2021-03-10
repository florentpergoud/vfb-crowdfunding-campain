import React from 'react';
import { AbsoluteFill } from 'remotion';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../theme';
import { Header } from './Header';

export const CrowdfundingEvolution: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <Background />
            <Header />
        </ThemeProvider>
    );
};

const Background = styled(AbsoluteFill)`
    background: ${({ theme }) => theme.colors.white};
`;
