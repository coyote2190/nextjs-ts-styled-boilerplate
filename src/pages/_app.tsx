import { ApolloProvider } from '@apollo/client';
import { EmotionCache } from '@emotion/cache';
import {
  CacheProvider,
  ThemeProvider as EmotionThemeProvider,
} from '@emotion/react';

import { CssBaseline, ThemeProvider } from '@mui/material';
import { useApollo } from 'api/queries/apollo';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { store } from 'store';
import 'styles/globals.css';
import createEmotionCache from 'theme/createEmotionCache';
import muiTheme from 'theme/muiTheme';
import theme from 'theme/themeEmotion';
import { NextPageWithLayout } from 'types/types';
import { disableReactDevTools } from 'utils/disableReactDevTools';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  emotionCache?: EmotionCache;
};

const App = (props: AppPropsWithLayout): ReactElement => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const getLayout = Component.getLayout ?? ((page) => page);
  const apolloClient = useApollo(pageProps);

  if (process.env.NEXT_PUBLIC_DISABLE_REACT_DEV_TOOLS === 'true') {
    disableReactDevTools();
  }

  return (
    <CacheProvider value={emotionCache}>
      <ApolloProvider client={apolloClient}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={muiTheme}>
          <EmotionThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Provider store={store}>
              {getLayout(<Component {...pageProps} />)}
            </Provider>
          </EmotionThemeProvider>
        </ThemeProvider>
      </ApolloProvider>
    </CacheProvider>
  );
};

export default App;
