export type Breakpoints = Record<keyof typeof breakpoints, string>;

const breakpoints = {
  xs: '0',
  sm: '600px',
  md: '960px',
  lg: '1280px',
  xl: '1920px',
};

export default breakpoints;
