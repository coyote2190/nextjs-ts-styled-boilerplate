import { DSFC } from 'types/types';

const NoSsr: React.FC<DSFC> = ({ children }) => (
  <div suppressHydrationWarning>
    {typeof window === 'undefined' ? null : children}
  </div>
);

export default NoSsr;
