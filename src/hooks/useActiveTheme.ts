import { useMemo } from 'react';
import { PaletteMode } from '@mui/material';
import { Theme, createTheme } from '@mui/material/styles';

import { createPaletteMode } from '../theme';
import useAppStore from '../store';

/**
 * Active Theme Hook
 */
export const useActiveTheme = (): Theme => {
  const mode: PaletteMode = useAppStore((state) => state.mode);
  return useMemo<Theme>(
    () => createTheme(createPaletteMode(mode)),
    [mode]
  );
};
