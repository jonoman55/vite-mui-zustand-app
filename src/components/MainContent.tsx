import React from 'react';
import { Box } from '@mui/material';

interface Children {
  children: React.ReactNode | JSX.Element | JSX.Element[];
}

export const MainContent = ({ children }: Children) => (
  <Box
    component="main"
    sx={{ display: 'flex', height: '100%', width: '100%', mt: 12 }}
  >
    {children}
  </Box>
);
