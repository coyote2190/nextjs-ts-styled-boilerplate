// import { Breakpoints as MuiBreakpointsType } from '@mui/material';
export type Breakpoints = Record<keyof typeof breakpoints, string>;

// export type Breakpoints = MuiBreakpointsType;

const breakpoints = {
  xs: '0',
  sm: '600px',
  md: '960px',
  lg: '1280px',
  xl: '1920px',
};

export default breakpoints;
