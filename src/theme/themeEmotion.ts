import '@emotion/react';
import breakpoints, { Breakpoints } from './breakpoints';
import colors, { Colors } from './colors';
import fonts, { Fonts } from './fonts';

declare module '@emotion/react' {
  export interface Theme {
    colors: Colors;
    breakpoints: Breakpoints;
    fonts: Fonts;
  }
}

const theme = {
  colors: colors,
  breakpoints: breakpoints,
  fonts: fonts,
};

export default theme;
