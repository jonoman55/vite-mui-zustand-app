import React from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Tabs,
  Tab,
  IconButton,
} from '@mui/material';
import { DarkMode, LightMode } from '@mui/icons-material';

import useAppStore from '../store';

const Header = () => {
  const { mode, setThemeMode, headerTabValue, setHeaderTabValue } =
    useAppStore();

  const handleThemeClick = () => {
    setThemeMode(mode);
  };

  const handleTabChange = (_e: React.SyntheticEvent, newValue: string) => {
    setHeaderTabValue(newValue);
  };

  return (
    <AppBar elevation={2} variant="elevation" color="default">
      <Toolbar
        component="div"
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          flexWrap: 'nowrap',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <Box component="div">
          <Typography variant="h4" sx={{ mr: 1 }}>
            MUI
          </Typography>
        </Box>
        <Box
          component="div"
          sx={{
            mx: 2,
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            flexWrap: 'nowrap',
            alignItems: 'center',
          }}
        >
          <Tabs
            value={headerTabValue}
            onChange={handleTabChange}
            textColor="secondary"
            indicatorColor="secondary"
            variant="fullWidth"
            aria-label="secondary tabs example"
          >
            <Tab value="one" label="Albums" />
            <Tab value="two" label="Contacts" />
            <Tab value="three" label="Profile" />
          </Tabs>
        </Box>
        <Box sx={{ display: 'flex' }}>
          <IconButton onClick={handleThemeClick}>
            {mode === 'light' ? (
              <LightMode sx={{ color: 'secondary.main' }} />
            ) : (
              <DarkMode sx={{ color: 'secondary.main' }} />
            )}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
