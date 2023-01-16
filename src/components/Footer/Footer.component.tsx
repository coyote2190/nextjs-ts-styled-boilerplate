import { FC } from 'react';
import { StyledFooter } from './StyledFooter';

import { FooterProps } from './types';

const Footer: FC<FooterProps> = () => {
  return (
    <StyledFooter>
      <p>
        © 2023 - Made with <span>❤</span>
      </p>
    </StyledFooter>
  );
};

export default Footer;
