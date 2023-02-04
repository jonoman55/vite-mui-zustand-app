import React, { lazy, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { CssBaseline, ThemeProvider, Theme, PaletteMode } from '@mui/material';

import { ErrorFallback, LoadingContainer } from './components';
import { useActiveTheme } from './hooks';
import useAppStore from './store';

const Routes: React.LazyExoticComponent<() => JSX.Element> = lazy(() =>
  import('./routes')
);

const App = () => {
  const theme: Theme = useActiveTheme();
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
