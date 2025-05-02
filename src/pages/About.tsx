import { Box, Container, Typography, Grid, Avatar, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { styled } from '@mui/material/styles';
import photo from "../assets/images/images.jpg"
const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  background: 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
}));

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box sx={{ py: 8 }}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h2" align="center" gutterBottom>
            About Dr. Smith
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Dedicated to creating beautiful, healthy smiles
          </Typography>
        </motion.div>

        <Grid container spacing={4} sx={{ mt: 4 }}>
          <Grid item xs={12} md={6}>
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <StyledPaper>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 4 }}>
                  <Avatar
                    src={photo}
                    alt="Dr. Smith"
                    sx={{ width: 200, height: 200, mb: 2 }}
                  />
                  <Typography variant="h4" gutterBottom>
                    Dr. John Smith, DDS
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    Board Certified Orthodontist
                  </Typography>
                </Box>
                <Typography paragraph>
                  Dr. Smith graduated with honors from the University of Dental Medicine and completed
                  his orthodontic residency at the prestigious Orthodontic Institute. With over 15 years
                  of experience, he has helped thousands of patients achieve their dream smiles.
                </Typography>
                <Typography paragraph>
                  Dr. Smith is committed to staying at the forefront of orthodontic technology and
                  techniques. He regularly attends continuing education courses and is an active member
                  of several professional organizations, including the American Association of
                  Orthodontists.
                </Typography>
              </StyledPaper>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <StyledPaper>
                <Typography variant="h5" gutterBottom>
                  Our Practice
                </Typography>
                <Typography paragraph>
                  At Dr. Smith Orthodontics, we believe in providing personalized care in a warm,
                  welcoming environment. Our state-of-the-art facility is equipped with the latest
                  technology to ensure the best possible outcomes for our patients.
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Our Mission
                </Typography>
                <Typography paragraph>
                  To provide exceptional orthodontic care that enhances our patients' lives through
                  beautiful, healthy smiles. We are committed to:
                </Typography>
                <Box component="ul" sx={{ pl: 2 }}>
                  <Typography component="li" paragraph>
                    Delivering personalized treatment plans
                  </Typography>
                  <Typography component="li" paragraph>
                    Using the latest technology and techniques
                  </Typography>
                  <Typography component="li" paragraph>
                    Creating a comfortable, stress-free environment
                  </Typography>
                  <Typography component="li" paragraph>
                    Building lasting relationships with our patients
                  </Typography>
                </Box>
              </StyledPaper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About; 