import * as React from 'react';
import { Avatar, Box, Button, Container, Checkbox, Grid, FormControlLabel, Typography, TextField, Link } from '@mui/material';
import { LockOutlined as LockOutlinedIcon } from '@mui/icons-material';

import { Copyright } from '../components';
import { UserSchema } from '../schemas/user';
import useAppStore from '../store';

/**
 * Sign In Page
 */
export default function SignIn() {
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
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            color="secondary"
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={({ target: { name, value } }: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
              setEmail(value);
              updateUser(name, value);
            }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            color="secondary"
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={({ target: { name, value } }: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
              setPassword(value);
              updateUser(name, value);
            }}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="secondary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            color="secondary"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2" color="secondary">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2" color="secondary">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
};