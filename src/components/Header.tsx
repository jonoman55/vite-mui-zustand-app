import React, { useEffect, useCallback } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Tabs,
  IconButton,
} from '@mui/material';
import { DarkMode, LightMode } from '@mui/icons-material';

import { RouterLinkTab as Tab } from './LinkTab';
import { usePathname } from '../hooks';
import useAppStore from '../store';

/**
 * Header
 */
const Header = () => {
  const pathname = usePathname();

  const { mode, setThemeMode, headerTabValue, setHeaderTabValue } =
    useAppStore();

  const handleThemeClick = () => {
    setThemeMode(mode);
  };

  const handleTabChange = (_e: React.SyntheticEvent, newValue: number) => {
    setHeaderTabValue(newValue);
  };

  const handleHeaderTabChange = useCallback<() => void>(() => {
    if (pathname === '/') {
      setHeaderTabValue(0);
    }
    if (pathname === '/contacts') {
      setHeaderTabValue(1);
    }
    if (pathname === '/profile') {
      setHeaderTabValue(2);
    }
    if (pathname === '/signup') {
      setHeaderTabValue(3);
    }
    if (pathname === '/signin') {
      setHeaderTabValue(4);
    }
  }, [pathname]);

  useEffect(() => handleHeaderTabChange(), [handleHeaderTabChange]);

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
            aria-label="nav tabs"
          >
            <Tab
              label="Home"
              to="/"
              onClick={() => setHeaderTabValue(0)}
            />
            <Tab
              label="Contacts"
              to="contacts"
              onClick={() => setHeaderTabValue(1)}
            />
            <Tab
              label="Profile"
              to="profile"
              onClick={() => setHeaderTabValue(2)}
            />
            <Tab
              label="Sign Up"
              to="signup"
              onClick={() => setHeaderTabValue(3)}
            />
            <Tab
              label="Sign In"
              to="signin"
              onClick={() => setHeaderTabValue(4)}
            />
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
