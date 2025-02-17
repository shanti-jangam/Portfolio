import { Grid2, Container } from '@mui/material';
import { Navbar } from './Navbar';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Container sx={{ 
      display: 'flex', 
      flexGrow:1,
      flexDirection: 'column',
      minHeight: '100vh',
    }}>
      <Navbar />
      <Grid2 container flexGrow={1}>
        {children}
      </Grid2>
    </Container>
  );
}; 