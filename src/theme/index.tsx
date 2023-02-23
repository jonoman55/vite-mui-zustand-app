import { PaletteMode } from '@mui/material';
import { ThemeOptions } from '@mui/material/styles';
import { TypographyOptions } from '@mui/material/styles/createTypography';

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
export const createPaletteMode = (mode: PaletteMode): ThemeOptions => ({
  palette: {
    mode,
  },
  typography,
});
