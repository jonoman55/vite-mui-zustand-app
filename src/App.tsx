import React from 'react';
import {
  Box,
  CssBaseline,
  ThemeProvider,
  Container,
  Tab,
  Theme,
} from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';

import Header from './components/Header';
import {
  ImgMediaCard,
  MediaControlCard,
  RecipeReviewCard,
} from './components/Cards';
import useAppStore from './store';
import { useThemeMode } from './theme';

const App = () => {
  const { mode, cardsTabValue, setCardsTabValue } = useAppStore();

  const theme: Theme = useThemeMode(mode);

  const handleChange = (_e: React.SyntheticEvent, newValue: string) => {
    setCardsTabValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <React.Fragment>
        <Header />
        <Box
          component="main"
          sx={{ display: 'flex', height: '100%', width: '100%', mt: 12 }}
        >
          <Container maxWidth="sm">
            <Box sx={{ width: '100%', typography: 'body1' }}>
              <TabContext value={cardsTabValue}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <TabList
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                    textColor="secondary"
                    indicatorColor="secondary"
                  >
                    <Tab label="Recipies" value="1" />
                    <Tab label="Animals" value="2" />
                    <Tab label="Music" value="3" />
                  </TabList>
                </Box>
                <TabPanel value="1">
                  <RecipeReviewCard />
                </TabPanel>
                <TabPanel value="2">
                  <ImgMediaCard />
                </TabPanel>
                <TabPanel value="3">
                  <MediaControlCard />
                </TabPanel>
              </TabContext>
            </Box>
          </Container>
        </Box>
      </React.Fragment>
    </ThemeProvider>
  );
};

export default App;
