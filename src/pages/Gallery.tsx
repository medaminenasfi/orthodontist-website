import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  Dialog,
  DialogContent,
  IconButton,
  Button,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const GalleryCard = styled(Card)(({ theme }) => ({
  height: '100%',
  cursor: 'pointer',
  background: 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-10px)',
  },
}));

const cases = [
  {
    id: 1,
    name: 'Sarah J.',
    age: 16,
    treatment: 'Traditional Braces',
    duration: '18 months',
    before: '/gallery/case1-before.jpg',
    after: '/gallery/case1-after.jpg',
  },
  {
    id: 2,
    name: 'Michael C.',
    age: 28,
    treatment: 'Invisalign',
    duration: '12 months',
    before: '/gallery/case2-before.jpg',
    after: '/gallery/case2-after.jpg',
  },
  {
    id: 3,
    name: 'Emily R.',
    age: 14,
    treatment: 'Early Treatment',
    duration: '24 months',
    before: '/gallery/case3-before.jpg',
    after: '/gallery/case3-after.jpg',
  },
  {
    id: 4,
    name: 'David W.',
    age: 35,
    treatment: 'Traditional Braces',
    duration: '20 months',
    before: '/gallery/case4-before.jpg',
    after: '/gallery/case4-after.jpg',
  },
];

const Gallery = () => {
  const [selectedCase, setSelectedCase] = useState<number | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleOpen = (id: number) => {
    setSelectedCase(id);
  };

  const handleClose = () => {
    setSelectedCase(null);
  };

  const handleNext = () => {
    if (selectedCase === null) return;
    const currentIndex = cases.findIndex((c) => c.id === selectedCase);
    const nextIndex = (currentIndex + 1) % cases.length;
    setSelectedCase(cases[nextIndex].id);
  };

  const handlePrevious = () => {
    if (selectedCase === null) return;
    const currentIndex = cases.findIndex((c) => c.id === selectedCase);
    const previousIndex = (currentIndex - 1 + cases.length) % cases.length;
    setSelectedCase(cases[previousIndex].id);
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
            Before & After Gallery
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
            See the amazing transformations from our patients
          </Typography>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Grid container spacing={4} sx={{ mt: 4 }}>
            {cases.map((caseItem) => (
              <Grid item xs={12} sm={6} md={3} key={caseItem.id}>
                <GalleryCard onClick={() => handleOpen(caseItem.id)}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={caseItem.before}
                    alt={`Before - ${caseItem.name}`}
                  />
                  <Box sx={{ p: 2 }}>
                    <Typography variant="h6" gutterBottom>
                      {caseItem.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {caseItem.age} years old • {caseItem.treatment}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Duration: {caseItem.duration}
                    </Typography>
                  </Box>
                </GalleryCard>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        <Dialog
          open={selectedCase !== null}
          onClose={handleClose}
          maxWidth="md"
          fullWidth
        >
          <DialogContent>
            {selectedCase !== null && (
              <Box sx={{ position: 'relative' }}>
                <IconButton
                  onClick={handleClose}
                  sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: 'white',
                  }}
                >
                  <CloseIcon />
                </IconButton>
                <IconButton
                  onClick={handlePrevious}
                  sx={{
                    position: 'absolute',
                    left: 8,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: 'white',
                  }}
                >
                  <ArrowBackIosIcon />
                </IconButton>
                <IconButton
                  onClick={handleNext}
                  sx={{
                    position: 'absolute',
                    right: 8,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: 'white',
                  }}
                >
                  <ArrowForwardIosIcon />
                </IconButton>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <Box sx={{ position: 'relative', pb: '100%' }}>
                      <Box
                        component="img"
                        src={cases.find((c) => c.id === selectedCase)?.before}
                        alt="Before"
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                      />
                      <Typography
                        variant="h6"
                        sx={{
                          position: 'absolute',
                          bottom: 16,
                          left: 16,
                          color: 'white',
                          textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                        }}
                      >
                        Before
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Box sx={{ position: 'relative', pb: '100%' }}>
                      <Box
                        component="img"
                        src={cases.find((c) => c.id === selectedCase)?.after}
                        alt="After"
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                      />
                      <Typography
                        variant="h6"
                        sx={{
                          position: 'absolute',
                          bottom: 16,
                          left: 16,
                          color: 'white',
                          textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                        }}
                      >
                        After
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            )}
          </DialogContent>
        </Dialog>
      </Container>
    </Box>
  );
};

export default Gallery; 