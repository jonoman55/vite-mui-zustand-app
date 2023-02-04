import { useMemo } from 'react';
import { Theme, PaletteMode } from '@mui/material';

import { useThemeMode } from '../theme';
import useAppStore from '../store';

/**
 * Active Theme Hook
 */
export const useActiveTheme = (): Theme => {
  const mode: PaletteMode = useAppStore((state) => state.mode);
  return useThemeMode(mode);
};
