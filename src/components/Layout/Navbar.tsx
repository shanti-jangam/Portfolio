import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link, LinkProps } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { ButtonProps } from '@mui/material';

const GlowButton = styled(Typography)<ButtonProps & { to?: LinkProps['to'] }>(({ theme }) => ({
  position: 'relative',
  transition: 'all 0.3s ease',
  textDecoration:'none',
  '&:hover': {
    textDecoration: 'underline',
    textUnderlineOffset: '8px',
    color: theme.palette.primary.main,
    textShadow: `0 0 10px ${theme.palette.primary.main}`,
    '&::before': {
      opacity: 1,
    },
  },
}));

const GlowTypography = styled(Typography)(({ theme }) => ({
  transition: 'all 0.3s ease',
  '&:hover': {
    color: theme.palette.primary.main,
    textShadow: `0 0 10px ${theme.palette.primary.main}`,
  },
}));

export const Navbar = () => {
  const navItems = ['Home', 'About', 'Skills', 'Experience', 'Education', 'Projects'];
  
  return (
    <AppBar position="sticky" sx={{backgroundColor:'transparent', color:'white'}}>
      <Toolbar>
        <GlowTypography variant="h6" sx={{ flexGrow: 1 }}>
          Shanti Jangam
        </GlowTypography>
        <Box sx={{ display: 'flex', gap: 4 }}>
          {navItems.map((item) => (
            <GlowButton
              key={item}
              color="inherit"
              component={Link}
              to={item.toLowerCase()}
            >
              {item}
            </GlowButton>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}; 