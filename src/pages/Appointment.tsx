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
            Book Your Appointment
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Schedule a consultation with our expert orthodontist
          </Typography>
        </motion.div>

        <Grid container spacing={4} sx={{ mt: 4 }}>
          <Grid item xs={12} md={6}>
            <StyledPaper>
              <Typography variant="h5" gutterBottom>
                Contact Information
              </Typography>
              <Typography paragraph>
                <strong>Address:</strong> 123 Dental Street, Suite 100<br />
                <strong>Phone:</strong> (555) 123-4567<br />
                <strong>Email:</strong> info@drsmithortho.com<br />
                <strong>Hours:</strong> Mon-Fri: 9am-5pm, Sat: 9am-1pm
              </Typography>
              <Typography variant="h6" gutterBottom>
                Emergency Contact
              </Typography>
              <Typography paragraph>
                For dental emergencies, please call our emergency line at (555) 987-6543
              </Typography>
            </StyledPaper>
          </Grid>

          <Grid item xs={12} md={6}>
            <StyledPaper>
              {submitted ? (
                <Alert severity="success" sx={{ mb: 2 }}>
                  Thank you for your appointment request! We will contact you shortly to confirm your booking.
                </Alert>
              ) : (
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        label="Full Name"
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
                        label="Phone"
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
                          <MenuItem value="consultation">Initial Consultation</MenuItem>
                          <MenuItem value="braces">Traditional Braces</MenuItem>
                          <MenuItem value="invisalign">Invisalign</MenuItem>
                          <MenuItem value="retainers">Retainers</MenuItem>
                          <MenuItem value="follow-up">Follow-up Visit</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        label="Preferred Date"
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