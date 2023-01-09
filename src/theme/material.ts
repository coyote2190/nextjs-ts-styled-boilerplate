import { createTheme, Theme } from '@mui/material/styles';

import colors from './colors';

const materialTheme = (
  ssrMatchMedia: (query: string) => { matches: boolean }
): Theme => {
  const theme = createTheme({
    palette: {
      primary: {
        main: colors.primaryColor,
      },
    },
  });

  return createTheme(theme, {
    components: {
      MuiUseMediaQuert: {
        defaultProps: {
          ssrMatchMedia,
        },
      },
      MuiButton: {
        variants: [],
        styleOverrides: {
          root: {
            fontSize: 15,
          },
        },
      },
    },
  });
};

export default materialTheme;
