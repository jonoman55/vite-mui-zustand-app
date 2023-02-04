import * as React from 'react';
import { Box } from '@mui/material';

import Header from './Header';
import { MainContent as Container } from './MainContent';

interface Children {
  children: React.ReactNode | JSX.Element | JSX.Element[];
}

export const Layout = ({ children }: Children) => (
  <Box component="div">
    <Header />
    <Container>{children}</Container>
  </Box>
);
