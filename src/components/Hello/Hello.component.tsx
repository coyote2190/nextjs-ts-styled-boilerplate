import { FC } from 'react';

import { Button } from '@mui/material';
import { StyledHelloContainer } from './StyledHello';
import { HelloProps } from './types';

const Hello: FC<HelloProps> = ({ name }) => (
  <StyledHelloContainer $isDisplayName>
    <p data-testid="helloDataTestId">
      Hello <span>{name}</span>
    </p>
    <Button variant="text">Text</Button>
    <Button variant="contained">Contained</Button>
    <Button variant="outlined">Outlined</Button>
  </StyledHelloContainer>
);

// export default React.memo(Hello);
export default Hello;
