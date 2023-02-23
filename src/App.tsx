// TODO : Add Notistack context provider and useNotify hook for toast notification
// TODO : Finish implementing signup and signin functionality

import React, { lazy, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { CssBaseline, ThemeProvider, Theme } from '@mui/material';

import { ErrorFallback, LoadingContainer } from './components';
import { useActiveTheme } from './hooks';

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
