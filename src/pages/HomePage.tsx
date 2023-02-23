import { Box, Container, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';

import {
  ImgMediaCard,
  MediaControlCard,
  RecipeReviewCard,
} from '../components';
import useAppStore from '../store';

/**
 * Home Page
 */
const HomePage = () => {
  const { cardsTabValue, setCardsTabValue } = useAppStore();

  const handleTabChange = (_e: React.SyntheticEvent, newValue: string) => {
    setCardsTabValue(newValue);
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={cardsTabValue}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList
              onChange={handleTabChange}
              aria-label="home-tabs"
              textColor="secondary"
              indicatorColor="secondary"
              centered
            >
              <Tab label="Recipes" value="1" />
              <Tab label="Animals" value="2" />
              <Tab label="Music" value="3" />
            </TabList>
          </Box>
          <TabPanel
            value="1"
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <RecipeReviewCard />
          </TabPanel>
          <TabPanel
            value="2"
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <ImgMediaCard />
          </TabPanel>
          <TabPanel
            value="3"
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <MediaControlCard />
          </TabPanel>
        </TabContext>
      </Box>
    </Container>
  );
};

export default HomePage;
