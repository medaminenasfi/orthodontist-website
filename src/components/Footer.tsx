import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const FooterContainer = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(45deg, #000000 30%, #1a1a1a 90%)',
  color: 'white',
  padding: theme.spacing(6, 0),
  marginTop: 'auto',
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: 'rgba(255, 255, 255, 0.7)',
  textDecoration: 'none',
  '&:hover': {
    color: 'white',
  },
}));

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Orthodontie Dr. Smith
            </Typography>
            <Typography variant="body2" paragraph>
              123 Rue Dentaire, Suite 100<br />
              Ville, État 12345<br />
              Téléphone : (555) 123-4567<br />
              Email : info@drsmithortho.com
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Liens Rapides
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', p: 0 }}>
              <li>
                <FooterLink href="/">Accueil</FooterLink>
              </li>
              <li>
                <FooterLink href="/about">À Propos</FooterLink>
              </li>
              <li>
                <FooterLink href="/services">Services</FooterLink>
              </li>
              <li>
                <FooterLink href="/appointment">Rendez-vous</FooterLink>
              </li>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Services
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', p: 0 }}>
              <li>
                <FooterLink href="/services#braces">Appareil Dentaire Traditionnel</FooterLink>
              </li>
              <li>
                <FooterLink href="/services#invisalign">Invisalign</FooterLink>
              </li>
              <li>
                <FooterLink href="/services#retainers">Contention</FooterLink>
              </li>
              <li>
                <FooterLink href="/services#early-treatment">Traitement Précoce</FooterLink>
              </li>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Suivez-nous
            </Typography>
            <Box>
              <IconButton
                color="inherit"
                component="a"
                href="https://facebook.com"
                target="_blank"
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                color="inherit"
                component="a"
                href="https://twitter.com"
                target="_blank"
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                color="inherit"
                component="a"
                href="https://instagram.com"
                target="_blank"
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                color="inherit"
                component="a"
                href="https://linkedin.com"
                target="_blank"
              >
                <LinkedInIcon />
              </IconButton>
            </Box>
            <Typography variant="body2" sx={{ mt: 2 }}>
              Restez connecté pour les dernières mises à jour et conseils dentaires
            </Typography>
          </Grid>
        </Grid>

        <Box sx={{ mt: 4, pt: 4, borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
          <Typography variant="body2" align="center">
            © {new Date().getFullYear()} Orthodontie Dr. Smith. Tous droits réservés.
          </Typography>
        </Box>
      </Container>
    </FooterContainer>
  );
};

export default Footer; 