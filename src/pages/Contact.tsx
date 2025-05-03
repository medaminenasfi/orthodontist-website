import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Paper,
  Alert,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { styled } from '@mui/material/styles';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  background: 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(45deg, #000000 30%, #1a1a1a 90%)',
  color: 'white',
  padding: theme.spacing(1.5, 4),
  '&:hover': {
    background: 'linear-gradient(45deg, #1a1a1a 30%, #000000 90%)',
  },
}));

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  return (
    <Box sx={{ py: 8 }}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h2" align="center" gutterBottom>
            Contactez-nous
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Prenez contact avec notre équipe
          </Typography>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Grid container spacing={4} sx={{ mt: 4 }}>
            <Grid item xs={12} md={6}>
              <StyledPaper>
                <Typography variant="h5" gutterBottom>
                  Informations du Cabinet
                </Typography>
                <Typography paragraph>
                  <strong>Adresse :</strong><br />
                  123 Rue Dentaire, Suite 100<br />
                  Ville, État 12345
                </Typography>
                <Typography paragraph>
                  <strong>Téléphone :</strong><br />
                  (555) 123-4567
                </Typography>
                <Typography paragraph>
                  <strong>Email :</strong><br />
                  info@drsmithortho.com
                </Typography>
                <Typography paragraph>
                  <strong>Horaires :</strong><br />
                  Lundi - Vendredi : 9h00 - 17h00<br />
                  Samedi : 9h00 - 13h00<br />
                  Dimanche : Fermé
                </Typography>
                <Typography paragraph>
                  <strong>Urgences :</strong><br />
                  Pour les urgences dentaires, veuillez appeler notre ligne d'urgence au (555) 987-6543
                </Typography>
              </StyledPaper>
            </Grid>

            <Grid item xs={12} md={6}>
              <StyledPaper>
                {submitted ? (
                  <Alert severity="success" sx={{ mb: 2 }}>
                    Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.
                  </Alert>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          label="Nom"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          label="Email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          label="Téléphone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          label="Sujet"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          label="Message"
                          name="message"
                          multiline
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <StyledButton
                          type="submit"
                          variant="contained"
                          fullWidth
                          size="large"
                        >
                          Send Message
                        </StyledButton>
                      </Grid>
                    </Grid>
                  </form>
                )}
              </StyledPaper>
            </Grid>
          </Grid>

          <Box sx={{ mt: 4 }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2155718122!2d-73.987844924164!3d40.757988971389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Contact; 