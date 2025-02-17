import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
        main: '#19f3f3',
      },
      secondary: {
        main: '#fff',
      },
  },
  typography: {
    fontFamily: '"Rubik", serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 600,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
    },
  },
  components: {
    MuiToolbar: {
      styleOverrides: {
        root: {
          [`&.MuiToolbar-root`]: {
            padding: '0 24px',
            '@media (min-width: 600px)': {
              padding: '0 24px'
            }
          }
        }
      }
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          [`&.MuiContainer-root`]: {
            padding: 0,
            margin: 0,
            maxWidth: 'none',
            width: '100%',   
          }
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          padding: '0 24px',
        },
      },
    },
  },
}); 