import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Paper,
  Alert,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

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

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name as string]: value,
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
            Prenez Rendez-vous
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Planifiez une consultation avec notre orthodontiste expert
          </Typography>
        </motion.div>

        <Grid container spacing={4} sx={{ mt: 4 }}>
          <Grid item xs={12} md={6}>
            <StyledPaper>
              <Typography variant="h5" gutterBottom>
                Informations de Contact
              </Typography>
              <Typography paragraph>
                <strong>Adresse :</strong> 123 Rue Dentaire, Suite 100<br />
                <strong>Téléphone :</strong> (555) 123-4567<br />
                <strong>Email :</strong> info@drsmithortho.com<br />
                <strong>Horaires :</strong> Lun-Ven: 9h-17h, Sam: 9h-13h
              </Typography>
              <Typography variant="h6" gutterBottom>
                Urgences
              </Typography>
              <Typography paragraph>
                Pour les urgences dentaires, veuillez appeler notre ligne d'urgence au (555) 987-6543
              </Typography>
            </StyledPaper>
          </Grid>

          <Grid item xs={12} md={6}>
            <StyledPaper>
              {submitted ? (
                <Alert severity="success" sx={{ mb: 2 }}>
                  Merci pour votre demande de rendez-vous ! Nous vous contacterons bientôt pour confirmer votre réservation.
                </Alert>
              ) : (
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        label="Nom Complet"
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
                      <FormControl fullWidth required>
                        <InputLabel>Service</InputLabel>
                        <Select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          label="Service"
                        >
                          <MenuItem value="consultation">Consultation Initiale</MenuItem>
                          <MenuItem value="braces">Appareil Dentaire Traditionnel</MenuItem>
                          <MenuItem value="invisalign">Invisalign</MenuItem>
                          <MenuItem value="retainers">Contention</MenuItem>
                          <MenuItem value="follow-up">Visite de Suivi</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        label="Date Préférée"
                        name="date"
                        type="date"
                        value={formData.date}
                        onChange={handleChange}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
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
                        Book Appointment
                      </StyledButton>
                    </Grid>
                  </Grid>
                </form>
              )}
            </StyledPaper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Appointment; 