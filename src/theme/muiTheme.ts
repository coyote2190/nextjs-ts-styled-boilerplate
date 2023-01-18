import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import { Roboto } from '@next/font/google';
import colors from './colors';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

const muiTheme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export default muiTheme;
