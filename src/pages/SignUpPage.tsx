import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Avatar, Button, Box, Container, Checkbox, Typography, Grid, TextField, FormControlLabel } from '@mui/material';
import { LockOutlined as LockOutlinedIcon } from '@mui/icons-material/';

import { Copyright } from '../components';
import { UserSchema } from '../schemas/user';
import useAppStore from '../store';

export default function SignUp() {
  const { user, setUser, email, setEmail, password, setPassword } = useAppStore();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    const password = data.get('password');
    if (UserSchema.safeParse(user).success) {
      console.log({
        email,
        password,
      });
    } else {

    }
  };

  const updateUser = (name: string, value: string) => {
    if (name === 'email') {
      setUser(value, '');
    }
    if (name === 'password') {
      setUser('', value);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                color="secondary"
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                color="secondary"
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                color="secondary"
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
                onChange={({ target: { name, value } }: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
                  setEmail(value);
                  updateUser(name, value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                color="secondary"
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                value={password}
                onChange={({ target: { name, value } }: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
                  setPassword(value);
                  updateUser(name, value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="secondary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            color="secondary"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Typography component={RouterLink} to="/signin" variant="body2" color="secondary">
                Already have an account? Sign in
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  );
};