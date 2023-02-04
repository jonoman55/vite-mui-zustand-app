import { lazy, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { CssBaseline, ThemeProvider, Theme, PaletteMode } from '@mui/material';

import { ErrorFallback, LoadingContainer } from './components';
import { useThemeMode } from './theme';
import useAppStore from './store';

const Routes = lazy(() => import('./routes'));

const App = () => {
  const mode: PaletteMode = useAppStore((state) => state.mode);
  const theme: Theme = useThemeMode(mode);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => window.location.reload()}
      >
        <Suspense fallback={<LoadingContainer />}>
          <Routes />
        </Suspense>
      </ErrorBoundary>
    </ThemeProvider>
  );
};

export default App;
