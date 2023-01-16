import { FC } from 'react';

import { StyledHelloContainer } from './StyledHello';
import { HelloProps } from './types';

const Hello: FC<HelloProps> = ({ name }) => (
  <StyledHelloContainer $isDisplayName>
    <p data-testid="helloDataTestId">
      Hello <span>{name}</span>
    </p>
  </StyledHelloContainer>
);

export default Hello;
