import { ThemeProvider } from '@mui/material/styles';
import type { AppProps } from 'next/app';
import { ThemeProvider as SCThemeProvider } from 'styled-components';

import '../styles/globals.css';
import theme from '../theme';
import materialTheme from '../theme/material';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      theme={materialTheme(() => ({
        matches: true,
      }))}
    >
      <SCThemeProvider theme={theme}>
        <Component {...pageProps} />
      </SCThemeProvider>
    </ThemeProvider>
  );
}
