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
              color: 'text.primary',
              fontWeight: 'bold',
            }}
          >
            Nos Services
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
        <Grid container spacing={4} sx={{ mt: 4 }} ref={ref}>
          {[
            {
              title: "Traitement par Appareil Dentaire",
              description: "Appareils dentaires traditionnels pour un alignement efficace des dents",
              icon: "🦷"
            },
            {
              title: "Invisalign",
              description: "Gouttières transparentes pour un redressement discret des dents",
              icon: "✨"
            },
            {
              title: "Contention",
              description: "Contentions personnalisées pour maintenir votre sourire parfait",
              icon: "🔒"
            },
            {
              title: "Urgences",
              description: "Prise en charge immédiate des urgences orthodontiques",
              icon: "🚑"
            },
            {
              title: "Orthodontie Pédiatrique",
              description: "Intervention précoce pour les sourires en croissance",
              icon: "👶"
            },
            {
              title: "Orthodontie Adulte",
              description: "Soins spécialisés pour les patients adultes",
              icon: "👨"
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
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                      <Typography variant="h2">{service.icon}</Typography>
                      <Typography variant="h5" component="h3" sx={{ color: 'text.primary' }}>
                        {service.title}
                      </Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      {service.description}
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{ mt: 2 }}
                    >
                      En Savoir Plus
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
            sx={{ color: 'text.primary' }}
          >
            Services Complémentaires
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            {[
              {
                title: "Empreintes Numériques",
                description: "Technologie de numérisation 3D avancée pour une planification précise du traitement",
                icon: "📱"
              },
              {
                title: "Blanchiment Dentaire",
                description: "Traitements de blanchiment professionnels pour un sourire plus éclatant",
                icon: "✨"
              },
              {
                title: "Hygiène Bucco-Dentaire",
                description: "Soins et éducation complets pour une santé dentaire optimale",
                icon: "🪥"
              },
              {
                title: "Consultation",
                description: "Planification de traitement personnalisée et conseils d'experts",
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
                          <Typography variant="h6" gutterBottom sx={{ color: 'text.primary' }}>
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