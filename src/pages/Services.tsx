import { Box, Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box id="services" sx={{ minHeight: '100vh', py: 8, bgcolor: 'background.default' }}>
      <Container>
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h2"
            align="center"
            gutterBottom
            sx={{
              background: 'linear-gradient(45deg, #fff 30%, #aaa 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 'bold',
            }}
          >
            Our Services
          </Typography>
          <Box
            sx={{
              width: 100,
              height: 4,
              mx: 'auto',
              background: 'linear-gradient(45deg, #666 30%, #333 90%)',
            }}
          />
        </motion.div>

        {/* Main Services Grid */}
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {[
            {
              title: "Braces Treatment",
              description: "Traditional metal braces for effective teeth alignment",
              icon: "🦷",
              image: "/images/braces.jpg"
            },
            {
              title: "Invisalign",
              description: "Clear aligners for discreet teeth straightening",
              icon: "✨",
              image: "/images/invisalign.jpg"
            },
            {
              title: "Retainers",
              description: "Custom retainers to maintain your perfect smile",
              icon: "🔒",
              image: "/images/retainers.jpg"
            },
            {
              title: "Emergency Care",
              description: "Immediate attention for orthodontic emergencies",
              icon: "🚑",
              image: "/images/emergency.jpg"
            },
            {
              title: "Child Orthodontics",
              description: "Early intervention for growing smiles",
              icon: "👶",
              image: "/images/child.jpg"
            },
            {
              title: "Adult Orthodontics",
              description: "Specialized care for adult patients",
              icon: "👨",
              image: "/images/adult.jpg"
            }
          ].map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    bgcolor: 'background.paper',
                    border: '1px solid',
                    borderColor: 'divider',
                    '&:hover': {
                      borderColor: 'primary.main',
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      height: 200,
                      overflow: 'hidden',
                    }}
                  >
                    <Box
                      component="img"
                      src={service.image}
                      alt={service.title}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.3s',
                        '&:hover': {
                          transform: 'scale(1.1)',
                        },
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)',
                      }}
                    />
                    <Typography
                      variant="h2"
                      sx={{
                        position: 'absolute',
                        top: 16,
                        right: 16,
                      }}
                    >
                      {service.icon}
                    </Typography>
                  </Box>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h5" component="h3" gutterBottom>
                      {service.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      {service.description}
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{ mt: 2 }}
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Additional Services Section */}
        <Box sx={{ mt: 8 }}>
          <Typography
            variant="h3"
            align="center"
            gutterBottom
            sx={{ color: 'text.secondary' }}
          >
            Additional Services
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            {[
              {
                title: "Digital Impressions",
                description: "Advanced 3D scanning technology for precise treatment planning",
                icon: "📱"
              },
              {
                title: "Teeth Whitening",
                description: "Professional whitening treatments for a brighter smile",
                icon: "✨"
              },
              {
                title: "Oral Hygiene",
                description: "Comprehensive care and education for optimal dental health",
                icon: "🪥"
              },
              {
                title: "Consultation",
                description: "Personalized treatment planning and expert advice",
                icon: "💬"
              }
            ].map((service, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      bgcolor: 'background.paper',
                      border: '1px solid',
                      borderColor: 'divider',
                      '&:hover': {
                        borderColor: 'primary.main',
                      },
                    }}
                  >
                    <CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                        <Typography variant="h2">{service.icon}</Typography>
                        <Box>
                          <Typography variant="h6" gutterBottom>
                            {service.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {service.description}
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Services; 