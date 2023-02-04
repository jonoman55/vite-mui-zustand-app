import { Box, Container, Typography, Paper } from '@mui/material';

const ProfilePage = () => (
  <Container maxWidth="sm">
    <Box component="div">
      <Paper
        elevation={2}
        sx={(theme) => ({
          m: 2,
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: theme.palette.secondary.main,
          borderRadius: theme.shape.borderRadius,
          border: `1px solid ${theme.palette.divider}`,
        })}
      >
        <Typography variant="h6">Profile</Typography>
      </Paper>
    </Box>
  </Container>
);

export default ProfilePage;
