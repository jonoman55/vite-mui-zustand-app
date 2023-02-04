import * as React from 'react';
import { Box } from '@mui/material';

import Header from './Header';
import { Container } from './Container';
import type { Children } from '../types';

/**
 * Page Layout
 */
export const Layout = ({ children }: Children) => (
  <React.Fragment>
    <Header />
    <Container>{children}</Container>
  </React.Fragment>
);
