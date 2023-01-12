import { Button } from '@mui/material';
import React, { FC } from 'react';

const Hello: FC = () => (
  <>
    <p data-testid="helloDataTestId">Hello</p>
    <Button variant="text">Text</Button>
    <Button variant="contained">Contained</Button>
    <Button variant="outlined">Outlined</Button>
  </>
);

export default React.memo(Hello);
