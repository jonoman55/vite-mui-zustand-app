import { useNavigate } from 'react-router-dom';
import { Typography, Card, CardContent, CardActions, Button, CSSObject, Theme } from '@mui/material';
import { Construction as ConstructionIcon } from '@mui/icons-material';

const cardStyles: CSSObject = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
};

/**
 * Under Construction Card
 */
export const UnderConstructionCard = () => {
  const navigate = useNavigate();
  return (
    <Card elevation={2} sx={(theme: Theme) => ({
      m: theme.spacing(2),
      p: theme.spacing(2),
      ...cardStyles,
      bgcolor: theme.palette.secondary.light,
    })}>
      <CardContent sx={{ p: 2, ...cardStyles }}>
        <ConstructionIcon fontSize="large" sx={{ color: "black" }} />
        <Typography fontWeight="bold" sx={{ m: 2, color: "black" }}>
          Under Construction
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined" color="secondary" onClick={() => navigate(-1)}>
          Go Back
        </Button>
      </CardActions>
    </Card>
  );
};
