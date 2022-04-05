import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#2ecc71',
      light: '#27ae60',
    },
    error: {
      main: '#ff6347',
    },
    text: {
      primary: '#000',
      secondary: '#fff',
    },
  },
});
