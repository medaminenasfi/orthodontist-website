import { Box, Container, Typography, Grid, Button, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import photo from "../assets/images/images.jpg";

const BlueBackground = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #e3f0ff 0%, #b3d8fd 100%)',
  borderRadius: theme.spacing(4),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  minHeight: 350,
}));

const About = () => {
  return (
    <Box sx={{ py: { xs: 6, md: 10 } }}>
      <Container>
        <Grid container spacing={6} alignItems="center">
          {/* Left: Headline, description, buttons */}
          <Grid item xs={12} md={6}>
            <Typography variant="h2" sx={{ fontWeight: 700, mb: 2, lineHeight: 1.1 }}>
              À Propos de <Box component="span" sx={{ color: 'primary.main', display: 'inline' }}>Dr. Smith</Box>
            </Typography>
            <Typography variant="h5" color="text.secondary" sx={{ mb: 3 }}>
              Dédié à créer des sourires beaux et sains grâce à des soins orthodontiques experts et personnalisés.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
              <Button variant="contained" color="primary" size="large" href="/appointment">
                Prendre Rendez-vous
              </Button>
              <Button variant="outlined" color="primary" size="large" href="/about">
                En savoir plus
              </Button>
            </Box>
            <Typography variant="body1" color="text.secondary">
              Le Dr. Smith, orthodontiste certifié avec plus de 15 ans d'expérience, s'engage à offrir les meilleurs traitements à ses patients dans un environnement moderne et accueillant.
            </Typography>
          </Grid>
          {/* Right: Doctor photo with blue background */}
          <Grid item xs={12} md={6}>
            <BlueBackground>
              <Box
                component="img"
                src={photo}
                alt="Dr. Smith"
                sx={{
                  width: { xs: 220, md: 280 },
                  height: { xs: 220, md: 280 },
                  borderRadius: '50%',
                  objectFit: 'cover',
                  boxShadow: 3,
                  border: '6px solid #fff',
                }}
              />
            </BlueBackground>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About; 