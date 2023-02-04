import { useMemo } from 'react';
import { createTheme, Theme, ThemeOptions } from '@mui/material/styles';
import { TypographyOptions } from '@mui/material/styles/createTypography';
import { PaletteMode } from '@mui/material';

declare module '@mui/material/styles' {
  interface Theme {}
  // allow configuration using `createTheme`
  interface ThemeOptions {}
}

/**
 * Default Typography Font
 */
const typography: TypographyOptions = {
  fontFamily: ['Roboto', 'sans-serif'].join(','),
};

/**
 * Create MUI Theme Palette Mode
 */
const createPaletteMode = (mode: PaletteMode): ThemeOptions => ({
  palette: {
    mode,
  },
  typography,
});

/**
 * Use Theme With Mode Hook
 */
export const useThemeMode = (mode: PaletteMode): Theme => {
  return useMemo(() => createTheme(createPaletteMode(mode)), [mode]);
};
