import React, { FC } from 'react';

const Hello: FC = () => (
  <>
    <p data-testid="helloDataTestId">Hello</p>
  </>
);

export default React.memo(Hello);
