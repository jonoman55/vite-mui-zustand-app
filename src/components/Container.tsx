import { Box } from '@mui/material';

import type { Children } from '../types';

/**
 * Main Container
 */
export const Container = ({ children }: Children) => (
  <Box
    component="main"
    sx={{ display: 'flex', height: '100%', width: '100%', mt: 12 }}
  >
    {children}
  </Box>
);
