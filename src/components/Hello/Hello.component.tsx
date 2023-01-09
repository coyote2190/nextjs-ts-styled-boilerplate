import { Input } from '@mui/material';
import React, { FC } from 'react';
import styled from 'styled-components';

const StyledTest = styled.p`
  color: red;
`;

const Hello: FC = () => (
  <>
    <p data-testid="helloDataTestId">Hello</p>
    <StyledTest>test</StyledTest>
    <Input />
  </>
);

export default React.memo(Hello);
