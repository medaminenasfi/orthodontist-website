import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: 'linear-gradient(45deg, #000000 30%, #1a1a1a 90%)',
  boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .3)',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  color: 'white',
  margin: theme.spacing(0, 1),
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
}));

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileOpen(false);
    }
  };

  const menuItems = [
    { text: 'About', id: 'about' },
    { text: 'Services', id: 'services' },
    { text: 'Testimonials', id: 'testimonials' },
    { text: 'Gallery', id: 'gallery' },
    { text: 'FAQ', id: 'faq' },
    { text: 'Contact', id: 'contact' },
    { text: 'Appointment', id: 'appointment' },
  ];

  const drawer = (
    <List>
      {menuItems.map((item) => (
        <ListItem
          button
          key={item.text}
          onClick={() => scrollToSection(item.id)}
          selected={activeSection === item.id}
        >
          <ListItemText primary={item.text} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <StyledAppBar position="fixed">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            onClick={() => scrollToSection('about')}
            sx={{
              flexGrow: 1,
              cursor: 'pointer',
              color: 'white',
              fontWeight: 'bold',
            }}
          >
            Dr. Smith Orthodontics
          </Typography>
          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box>
              {menuItems.map((item) => (
                <StyledButton
                  key={item.text}
                  onClick={() => scrollToSection(item.id)}
                  sx={{
                    backgroundColor: activeSection === item.id ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
                  }}
                >
                  {item.text}
                </StyledButton>
              ))}
            </Box>
          )}
        </Toolbar>
      </StyledAppBar>
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {drawer}
      </Drawer>
      <Toolbar /> {/* Spacer for fixed AppBar */}
    </Box>
  );
};

export default Navbar; 