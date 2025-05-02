import { Box, Container, Typography, Grid, Card, CardContent, Avatar, Rating } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { styled } from '@mui/material/styles';

const TestimonialCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  background: 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-10px)',
  },
}));

const testimonials = [
  {
    name: 'Sarah Johnson',
    age: 16,
    treatment: 'Traditional Braces',
    duration: '18 months',
    rating: 5,
    review: 'Dr. Smith and his team made my orthodontic journey so comfortable. My smile is now perfect, and I couldn\'t be happier with the results!',
    image: '/testimonials/sarah.jpg',
  },
  {
    name: 'Michael Chen',
    age: 28,
    treatment: 'Invisalign',
    duration: '12 months',
    rating: 5,
    review: 'As a working professional, Invisalign was the perfect solution for me. The treatment was discreet and effective. Dr. Smith\'s expertise made all the difference.',
    image: '/testimonials/michael.jpg',
  },
  {
    name: 'Emily Rodriguez',
    age: 14,
    treatment: 'Early Treatment',
    duration: '24 months',
    rating: 5,
    review: 'Starting treatment early was the best decision. Dr. Smith guided my jaw development perfectly, and now I have a beautiful, healthy smile.',
    image: '/testimonials/emily.jpg',
  },
  {
    name: 'David Wilson',
    age: 35,
    treatment: 'Traditional Braces',
    duration: '20 months',
    rating: 5,
    review: 'I was nervous about getting braces as an adult, but Dr. Smith and his team made me feel at ease. The results exceeded my expectations!',
    image: '/testimonials/david.jpg',
  },
];

const Testimonials = () => {
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
            Patient Testimonials
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Hear what our patients have to say about their experience
          </Typography>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Grid container spacing={4} sx={{ mt: 4 }}>
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <TestimonialCard>
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Avatar
                        src={testimonial.image}
                        alt={testimonial.name}
                        sx={{ width: 60, height: 60, mr: 2 }}
                      />
                      <Box>
                        <Typography variant="h6">{testimonial.name}</Typography>
                        <Typography variant="body2" color="text.secondary">
                          {testimonial.age} years old • {testimonial.treatment}
                        </Typography>
                      </Box>
                    </Box>
                    <Rating value={testimonial.rating} readOnly sx={{ mb: 2 }} />
                    <Typography paragraph>{testimonial.review}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Treatment Duration: {testimonial.duration}
                    </Typography>
                  </CardContent>
                </TestimonialCard>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Testimonials; 