import { EmotionCache } from '@emotion/cache';
import {
  CacheProvider,
  ThemeProvider as EmotionThemeProvider,
} from '@emotion/react';

import { CssBaseline, ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ReactElement } from 'react';
import '../styles/globals.css';
import createEmotionCache from '../theme/createEmotionCache';
import muiTheme from '../theme/muiTheme';
import theme from '../theme/themeEmotion';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const App = (props: MyAppProps): ReactElement => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={muiTheme}>
        <EmotionThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
        </EmotionThemeProvider>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default App;
