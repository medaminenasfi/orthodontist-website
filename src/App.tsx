import { useState, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Fab, useScrollTrigger, Zoom, Container } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Navbar from './components/Navbar';
import About from './pages/About';
import Services from './pages/Services';
import Testimonials from './pages/Testimonials';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Appointment from './pages/Appointment';
import Footer from './components/Footer';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2196f3',
      light: '#64b5f6',
      dark: '#1976d2',
    },
    secondary: {
      main: '#ff4081',
      light: '#ff79b0',
      dark: '#c60055',
    },
    background: {
      default: '#ffffff',
      paper: '#f8f9fa',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 600,
    },
    h2: {
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 500,
        },
      },
    },
  },
});

function ScrollTop(props: { children: React.ReactNode }) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16, zIndex: 1000 }}
      >
        {children}
      </Box>
    </Zoom>
  );
}

function ScrollDown(props: { children: React.ReactNode }) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, left: 16, zIndex: 1000 }}
      >
        {children}
      </Box>
    </Zoom>
  );
}

function App() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'services', 'testimonials', 'gallery', 'faq', 'contact', 'appointment'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar activeSection={activeSection} />
        <Box component="main" sx={{ flexGrow: 1 }}>
          <Container maxWidth="lg">
            <Box id="about" sx={{ py: 8 }}>
              <About />
            </Box>
            <Box id="services" sx={{ py: 8 }}>
              <Services />
            </Box>
            <Box id="testimonials" sx={{ py: 8 }}>
              <Testimonials />
            </Box>
            <Box id="gallery" sx={{ py: 8 }}>
              <Gallery />
            </Box>
            <Box id="faq" sx={{ py: 8 }}>
              <FAQ />
            </Box>
            <Box id="contact" sx={{ py: 8 }}>
              <Contact />
            </Box>
            <Box id="appointment" sx={{ py: 8 }}>
              <Appointment />
            </Box>
          </Container>
        </Box>
        <Footer />
        <ScrollTop>
          <Fab color="primary" size="medium" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
        <ScrollDown>
          <Fab color="secondary" size="medium" aria-label="scroll down">
            <KeyboardArrowDownIcon />
          </Fab>
        </ScrollDown>
      </Box>
    </ThemeProvider>
  );
}

export default App; 