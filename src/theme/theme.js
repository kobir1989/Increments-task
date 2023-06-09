import { createTheme } from '@mui/material/styles';
import { palette } from './palette';
import { typography } from './typography';

// Create a theme instance.
const theme = createTheme({
  palette: palette,
  typography: typography,
  breakpoints: {
    values: {
      xs: 0,
      sm: 360,
      md: 576,
      lg: 768,
      xl: 992,
      xxl: 1200,
      xxxl: 1490,
    },
  },
});

export default theme;
